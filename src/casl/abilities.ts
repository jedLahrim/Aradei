import { defineAbility } from '@casl/ability';

export default (user) =>
  defineAbility((can) => {
    if (user.roleId === 1) {
      can('read', 'UserProfile');
    }
  });
