import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SortType } from '../common/enums/sort-type.enum';
import { UserPayload } from '../auth/interface/user-payload';
import { History } from './entities/history.entity';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async getAllHistory(user: UserPayload, activity: string): Promise<History[]> {
    const where = {
      action: activity && activity !== 'ALL' ? activity : undefined,
      creator: {
        is: {
          id: user.id,
        },
      },
    };
    // const historyTotal = await this.prisma.history.count({ where: where });
    const history = await this.prisma.history.findMany({
      where: where,
      orderBy: {
        createdAt: SortType.desc,
      },
      include: {
        creator: true,
        contact: {},
        booking: {
          include: {
            units: {
              include: {
                floor: {
                  include: {
                    retailCenter: true,
                  },
                },
              },
            },
            documents: true,
          },
        },
      },
    });
    let filteredHistory = history;
    if (activity && activity != 'ALL') {
      filteredHistory = history.filter((history) => history.action == activity);
    }

    return filteredHistory;
  }
}
