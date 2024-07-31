import { formatDateShort } from '../../utils/date';
import { Booking } from 'src/booking/entities/booking.entity';

export const hotMakeHtml = (booking: Booking) => {
  const html = `<html xmlns="http://www.w3.org/1999/xhtml">
<!--This file was converted to xhtml by LibreOffice - see https://cgit.freedesktop.org/libreoffice/core/tree/filter/source/xslt for the code.--><head
  profile="http://dublincore.org/documents/dcmi-terms/"
>
  <style type="text/css">
    @page {
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
    }
    td,
    th {
      vertical-align: top;
      font-size: 10pt;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      clear: both;
    }
    p {
      white-space: nowrap;
    }
    ol,
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    /* "li span.odfLiEnd" - IE 7 issue*/
    li span. {
      clear: both;
      line-height: 0;
      width: 0;
      height: 0;
      margin: 0;
      padding: 0;
    }
    span.footnodeNumber {
      padding-right: 1em;
    }
    span.annotation_style_by_filter {
      font-size: 95%;
      font-family: Arial;
      background-color: #fff000;
      margin: 0;
      border: 0;
      padding: 0;
    }
    span.heading_numbering {
      margin-right: 0.8rem;
    }
    * {
      margin: 0;
    }
    .gr1 {
      font-size: 12pt;
      writing-mode: horizontal-tb;
      direction: ltr;
      min-height: 0in;
      min-width: 0in;
      padding-top: 0.0492in;
      padding-bottom: 0.0492in;
      padding-left: 0.0984in;
      padding-right: 0.0984in;
    }
    .P1 {
      margin-top: 0in;
      margin-bottom: 0in;
      line-height: 100%;
      text-align: left !important;
    }
    .P2 {
      text-align: left !important;
      font-size: 18pt;
    }
    .ta1 {
      writing-mode: horizontal-tb;
      direction: ltr;
    }
    .Default {
      font-family: Arial;
      vertical-align: bottom;
    }
    .ce1 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-style: none;
      background-color: #984807;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      color: #f2f2f2;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce10 {
      font-family: Arial;
      vertical-align: middle;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce100 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce101 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce102 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: #e6b9b8;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce103 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce104 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce105 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce106 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce107 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce108 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce109 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce11 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: #d9d9d9;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce110 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce111 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce112 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce113 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce114 {
      font-family: Arial;
      vertical-align: bottom;
    }
    .ce115 {
      font-family: Arial;
      vertical-align: bottom;
      background-color: transparent;
      border-style: none;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce116 {
      font-family: Arial;
      vertical-align: bottom;
    }
    .ce12 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: #d9d9d9;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce13 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: #d9d9d9;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce14 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: #d9d9d9;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce15 {
      font-family: Arial;
      vertical-align: middle;
      background-color: #d9d9d9;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce16 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-style: none;
      background-color: #984807;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      color: #f2f2f2;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce17 {
      font-family: Arial;
      vertical-align: bottom;
      background-color: #984807;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      color: #f2f2f2;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce18 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce19 {
      font-family: Arial;
      vertical-align: middle;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce2 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-style: none;
      background-color: #984807;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      color: #f2f2f2;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce20 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce21 {
      font-family: Arial;
      vertical-align: middle;
      background-color: #d9d9d9;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce22 {
      font-family: Arial;
      vertical-align: middle;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce23 {
      font-family: Arial;
      vertical-align: middle;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce24 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce25 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce26 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce27 {
      font-family: Arial;
      vertical-align: middle;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce28 {
      font-family: Arial;
      vertical-align: bottom;
      border-style: none;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce29 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce3 {
      font-family: Arial;
      vertical-align: bottom;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce30 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce31 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-style: none;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce32 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce33 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce34 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce35 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce36 {
      font-family: Arial;
      vertical-align: middle;
      background-color: #e6b9b8;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce37 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce38 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce39 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-style: none;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce4 {
      font-family: Arial;
      vertical-align: bottom;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce40 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-style: none;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce41 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce42 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce43 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce44 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce45 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce46 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce47 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce48 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce49 {
      font-family: Arial;
      vertical-align: middle;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
    }
    .ce5 {
      font-family: Arial;
      vertical-align: middle;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce50 {
      font-family: Arial;
      vertical-align: bottom;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce51 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce52 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce53 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-style: none;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce54 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
    }
    .ce55 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce56 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce57 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce58 {
      font-family: Arial;
      vertical-align: middle;
      background-color: #e6b9b8;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce59 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce6 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce60 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: transparent;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce61 {
      font-family: Arial;
      vertical-align: middle;
      background-color: transparent;
      border-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce62 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce63 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-style: none;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce64 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce65 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce66 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce67 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce68 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce69 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce7 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce70 {
      font-family: Arial;
      vertical-align: middle;
      background-color: #d9d9d9;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce71 {
      font-family: Arial;
      vertical-align: middle;
      background-color: transparent;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce72 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-style: none;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce73 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-style: none;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce74 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: #e6b9b8;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce75 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce76 {
      font-family: Arial;
      vertical-align: middle;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce77 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce78 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce79 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce8 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
    }
    .ce80 {
      font-family: Arial;
      vertical-align: middle;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce81 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce82 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce83 {
      font-family: Arial;
      vertical-align: middle;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce84 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-style: none;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce85 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-style: none;
      background-color: #984807;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      color: #f2f2f2;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce86 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-style: none;
      background-color: #984807;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      color: #f2f2f2;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce87 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce88 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-style: none;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce89 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce9 {
      font-family: Arial;
      vertical-align: middle;
      background-color: #d9d9d9;
      border-width: 0.0261cm;
      border-style: solid;
      border-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce90 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      background-color: #d9d9d9;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce91 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 11pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce92 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce93 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce94 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce95 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0261cm;
      border-top-style: solid;
      border-top-color: #000000;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    .ce96 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-style: none;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce97 {
      font-family: Arial;
      vertical-align: bottom;
      border-bottom-width: 0.0261cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-style: none;
    }
    .ce98 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: left !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .ce99 {
      font-family: Arial;
      vertical-align: middle;
      border-bottom-width: 0.0133cm;
      border-bottom-style: solid;
      border-bottom-color: #000000;
      border-left-width: 0.0261cm;
      border-left-style: solid;
      border-left-color: #000000;
      border-right-width: 0.0261cm;
      border-right-style: solid;
      border-right-color: #000000;
      border-top-width: 0.0133cm;
      border-top-style: solid;
      border-top-color: #000000;
      text-align: center !important;
      margin-left: 0in;
      writing-mode: horizontal-tb;
      direction: ltr;
      font-size: 12pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: bold;
    }
    .co1 {
      width: 5.3382in;
    }
    .co10 {
      width: 1.122in;
    }
    .co11 {
      width: 1.1429in;
    }
    .co2 {
      width: 2.3008in;
    }
    .co3 {
      width: 1.7535in;
    }
    .co4 {
      width: 1.5992in;
    }
    .co5 {
      width: 4.1807in;
    }
    .co6 {
      width: 4.0689in;
    }
    .co7 {
      width: 0.8839in;
    }
    .co8 {
      width: 1.0165in;
    }
    .co9 {
      width: 1.1362in;
    }
    .ro1 {
      height: 0.2398in;
    }
    .ro10 {
      height: 0.2811in;
    }
    .ro11 {
      height: 0.4898in;
    }
    .ro12 {
      height: 0.5728in;
    }
    .ro13 {
      height: 0.2917in;
    }
    .ro14 {
      height: 0.4374in;
    }
    .ro15 {
      height: 0.4689in;
    }
    .ro16 {
      height: 0.2189in;
    }
    .ro17 {
      height: 0.2154in;
    }
    .ro18 {
      height: 0.302in;
    }
    .ro19 {
      height: 0.3335in;
    }
    .ro2 {
      height: 0.3055in;
    }
    .ro20 {
      height: 0.1772in;
    }
    .ro21 {
      height: 0.1736in;
    }
    .ro3 {
      height: 0.2154in;
    }
    .ro4 {
      height: 0.0417in;
    }
    .ro5 {
      height: 0.0835in;
    }
    .ro6 {
      height: 0.139in;
    }
    .ro7 {
      height: 0.4307in;
    }
    .ro8 {
      height: 0.25in;
    }
    .ro9 {
      height: 0.4583in;
    }
    .T1 {
      color: #ff0000;
      font-size: 10pt;
      letter-spacing: normal;
      font-style: normal;
      text-decoration: none !important;
      font-weight: bold;
    }
    .T2 {
      font-family: Arial;
      font-size: 10pt;
      font-style: normal;
      text-shadow: none;
      text-decoration: none !important;
      font-weight: normal;
    }
    /* ODF styles with no properties representable as CSS */
     {
    }
  </style>
</head>
<body
  dir="ltr"
  style="
    max-width: 8.2681in;
    margin-top: 0.3154in;
    margin-bottom: 0.3154in;
    margin-left: 0in;
    margin-right: 0in;
  "
>
  <table border="0" cellspacing="0" cellpadding="0" class="ta1">
    <colgroup>
      <col width="593" />
      <col width="255" />
      <col width="195" />
      <col width="178" />
      <col width="464" />
      <col width="452" />
    </colgroup>
    <tr class="ro1">
      <td colspan="6" style="text-align: left; width: 5.3382in" class="ce1">
        <p>HEAD OF TERMS</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro1">
      <td colspan="6" style="text-align: left; width: 5.3382in" class="ce2">
        <p>SITE : ${booking.units[0].floor.retailCenter.name}</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro1">
      <td colspan="6" style="text-align: left; width: 5.3382in" class="ce2">
        <p>${booking.company.name}</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro2">
      <td style="text-align: right; width: 5.3382in" class="ce3">
        <p>${formatDateShort(new Date())}</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>LANDLORD</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro4">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro5">
      <td
        colspan="6"
        rowspan="3"
        style="text-align: left; width: 5.3382in"
        class="ce5"
      >
      <p>SITE : ${booking.units[0].floor.retailCenter.name}</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro5">
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro5">
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>LOCAL</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro7">
      <td style="text-align: left; width: 5.3382in" class="ce8"> </td>
      <td style="text-align: left; width: 2.3008in" class="ce21">
        <p>N°</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce21">
        <p>FLOOR</p>
      </td>
      <td style="text-align: left; width: 1.5992in" class="ce70">
        <p>FLOOR AREA (sqm)</p>
      </td>
      <td colspan="2" style="text-align: left; width: 4.1807in" class="ce70">
        <p>MEZZANINE AREA</p>
        <p>(sqm)</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce9">
        <p>STORE DESIGNATION</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce22">
        <p><p>${booking.units.map((unit) => unit.unitId)}</p></p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce22">
        <p>${booking.units[0].floor.name}</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce71">
        <p> ${booking.units[0].surface} m²    </p>
      </td>
      <td colspan="2" style="text-align: right; width: 4.1807in" class="ce80">
        <p>${booking.units[0].surface} m²</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce9"> </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce23">
         
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>ACTIVITY &amp; BRAND</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro8">
      <td style="text-align: left; width: 5.3382in" class="ce9">
        <p>BRAND</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce24">
        <p>${booking.company.name} </p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce46"> </td>
      <td style="text-align: left; width: 1.5992in" class="ce46"> </td>
      <td style="text-align: left; width: 4.1807in" class="ce46"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce92"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro8">
      <td style="text-align: left; width: 5.3382in" class="ce9">
        <p>ACTIVITY</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce25">
        <p>Ready to Wear items</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce47"> </td>
      <td style="text-align: left; width: 1.5992in" class="ce47"> </td>
      <td style="text-align: left; width: 4.1807in" class="ce47"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce93"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro9">
      <td style="text-align: left; width: 5.3382in" class="ce9">
        <p>CHANGE OF BRAND</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce26">
        <p>NOT AUTHORIZED</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="ce10"> </td>
      <td style="text-align: left; width: 2.3008in" class="ce27"> </td>
      <td style="text-align: left; width: 1.7535in" class="ce49"> </td>
      <td style="text-align: left; width: 1.5992in" class="ce49"> </td>
      <td style="text-align: left; width: 4.1807in" class="ce49"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce49"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="ce10"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>CONTRACT TERMS</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce28">
         
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro10">
      <td style="text-align: left; width: 5.3382in" class="ce11">
        <p>DURATION</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce29">
        <p>3-6-9 Years</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce51"> </td>
      <td style="text-align: left; width: 1.5992in" class="ce51"> </td>
      <td style="text-align: left; width: 4.1807in" class="ce51"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce95"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro11">
      <td style="text-align: left; width: 5.3382in" class="ce11">
        <p>EXPECTED DELIVERY DATE</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce30">
        <p>Q4 2023 // Q1 2024 (6 months of grace to be considered)</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>RENTS &amp; CHARGES</p>
      </td>
      <td colspan="2" style="text-align: left; width: 2.3008in" class="ce31">
        <p>RENT (MAD/sqm/mth excl. Taxes &amp; charges)</p>
      </td>
      <td colspan="2" style="text-align: left; width: 1.5992in" class="ce31">
        <p>RENT (MAD/mth excl. Taxes &amp; charges)</p>
      </td>
      <td style="text-align: left; width: 4.0689in" class="ce31">
        <p>COMMENTS</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td colspan="2" style="text-align: left; width: 2.3008in" class="ce32">
         
      </td>
      <td style="text-align: left; width: 1.5992in" class="ce72"> </td>
      <td style="text-align: left; width: 4.1807in" class="ce81"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce97"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro12">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>RENT Y 1</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce33">
        <p>1 MAD</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce55">
        <p> sqm / mth</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce73">
        <p>464 MAD</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce82">
        <p>/mth (excl. Taxes)</p>
      </td>
      <td style="text-align: left; width: 4.0689in" class="ce98"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="ce114"> </td>
      <td style="text-align: left; width: 1.1362in" class="ce115"> </td>
      <td style="text-align: left; width: 1.122in" class="ce115"> </td>
      <td style="text-align: left; width: 1.1429in" class="ce116"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro13">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>RENT Y 2</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce33">
        <p>2 MAD</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce55">
        <p> sqm / mth</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce73">
        <p>927 MAD</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce82">
        <p>/mth (excl. Taxes)</p>
      </td>
      <td style="text-align: left; width: 4.0689in" class="ce99"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="ce114"> </td>
      <td style="text-align: left; width: 1.1362in" class="ce115"> </td>
      <td style="text-align: left; width: 1.122in" class="ce115"> </td>
      <td style="text-align: left; width: 1.1429in" class="ce116"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro13">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>RENT Y 3</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce33">
        <p>3 MAD</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce55">
        <p> sqm / mth</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce73">
        <p>1,391 MAD</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce82">
        <p>/mth (excl. Taxes)</p>
      </td>
      <td style="text-align: left; width: 4.0689in" class="ce99"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="ce114"> </td>
      <td style="text-align: left; width: 1.1362in" class="ce115"> </td>
      <td style="text-align: left; width: 1.122in" class="ce115"> </td>
      <td style="text-align: left; width: 1.1429in" class="ce116"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>INVOICING DATE OF THE FIRST RENT</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce34">
        <p>3 months after store delivery</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro14">
      <td style="text-align: left; width: 5.3382in" class="ce13">
        <p>RENT REVISION</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce35">
        <p>
          10% every three years or 3% every year according to Moroccan Law
        </p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro14">
      <td style="text-align: left; width: 5.3382in" class="ce13">
        <p>COMMON CHARGES</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce36">
        <p>1</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce58">
        <p>MAD/sq m/month, hence</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce74">
        <p>464 MAD</p>
      </td>
      <td colspan="2" style="text-align: left; width: 4.1807in" class="ce58">
        <p>
          /mth (excl. Taxes) during the first year. Common charges will always
          be updated according to the rent
        </p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro15">
      <td style="text-align: left; width: 5.3382in" class="ce13">
        <p>Fit out period</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce37">
        <p>3 months only</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>TAXES &amp; WORKS</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro8">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>COMMUNAL TAX</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce38">
        <p>At Tenant's charge</p>
      </td>
      <td style="text-align: right; width: 1.7535in" class="ce60">
        <p>10.50%</p>
      </td>
      <td style="text-align: left; width: 1.5992in" class="ce75">
        <p>of the rent + charges value, hence for the first year</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce75"> </td>
      <td style="text-align: right; width: 4.0689in" class="ce104">
        <p>97.36 MAD</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro1">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>OTHER EXISTING OR FUTURE TAXES OF ALL NATURE (VAT)</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce39">
        <p>At Tenant's charge</p>
      </td>
      <td style="text-align: right; width: 1.7535in" class="ce61">
        <p>20.00%</p>
      </td>
      <td style="text-align: left; width: 1.5992in" class="ce76">
        <p>of the rent + charges value, hence for the first year</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce83"> </td>
      <td style="text-align: right; width: 4.0689in" class="ce105">
        <p>204.93 MAD</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro1">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>STRUCTURAL WORKS</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce38">
        <p>At Landlord's charge</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce62"> </td>
      <td style="text-align: left; width: 1.5992in" class="ce62"> </td>
      <td style="text-align: left; width: 4.1807in" class="ce62"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce106"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro16">
      <td style="text-align: left; width: 5.3382in" class="ce13">
        <p>FIT-OUT WORKS</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="ce40">
        <p>At Tenant's charge</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce63"> </td>
      <td style="text-align: left; width: 1.5992in" class="ce63"> </td>
      <td style="text-align: left; width: 4.1807in" class="ce63"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce107"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro17">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>PAYMENTS UPON LEASE SIGNATURE</p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro8">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>GURANTEE DEPOSIT (3 mths)</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce41">
        <p>2,782 MAD</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce64">
        <p>excl. VAT ==&gt;</p>
      </td>
      <td style="text-align: left; width: 1.5992in" class="ce64">
        <p>Amounts to be paid excluding VAT</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce64"> </td>
      <td style="text-align: left; width: 4.0689in" class="ce108"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro18">
      <td style="text-align: left; width: 5.3382in" class="ce12">
        <p>RETAIL TENANCY MANAGEMENT DURING FIT-OUT (1/2 mth rent)</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce42">
        <p>232 MAD</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce65">
        <p>excl. VAT ==&gt;</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce77">
        <p>278 MAD</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce65">
        <p>Including VAT</p>
      </td>
      <td style="text-align: left; width: 4.0689in" class="ce109"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro19">
      <td style="text-align: left; width: 5.3382in" class="ce13">
        <p>PRE-OPENING MARKETING (1/2 mth rent)</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce42">
        <p>232 MAD</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce66">
        <p>excl. VAT ==&gt;</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce78">
        <p>278 MAD</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce66">
        <p>Including VAT</p>
      </td>
      <td style="text-align: left; width: 4.0689in" class="ce110"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro15">
      <td style="text-align: left; width: 5.3382in" class="ce14">
        <p>TOTAL AMOUNT DUE UPON SIGNATURE</p>
      </td>
      <td style="text-align: right; width: 2.3008in" class="ce43">
        <p>3,245 MAD</p>
      </td>
      <td style="text-align: left; width: 1.7535in" class="ce67">
        <p>excluding charges, hence</p>
      </td>
      <td style="text-align: right; width: 1.5992in" class="ce79">
        <p>3,449 MAD</p>
      </td>
      <td style="text-align: left; width: 4.1807in" class="ce84">
        <p>Including VAT</p>
      </td>
      <td style="text-align: left; width: 4.0689in" class="ce111"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
   
    <tr class="ro3">
      <td style="text-align: left; width: 5.3382in" class="ce4">
        <p>
          SUB-LEASING / FREE MANAGEMENT OF GOOD WILL / LEASE RIGHTS TRANSFER :
        </p>
      </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro20">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro14">
      <td style="text-align: left; width: 5.3382in" class="ce9">
        <p>SUB-LEASING</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce44">
        <p>Not allowed</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro14">
      <td style="text-align: left; width: 5.3382in" class="ce9">
        <p>FREE MANAGEMENT OF GOOD WILL</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce44">
        <p>Not allowed</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro14">
      <td style="text-align: left; width: 5.3382in" class="ce9">
        <p>LEASE RIGHTS TRANSFER</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce44">
        <p>Not allowed</p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro14">
      <td style="text-align: left; width: 5.3382in" class="ce15">
        <p>PREEMPTION RIGHTS</p>
      </td>
      <td colspan="5" style="text-align: left; width: 2.3008in" class="ce45">
        <p>
          The landlord benefits from preemption rights on tenant's good will
          in the case the tenants wishes to sell his good will
        </p>
      </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro6">
      <td style="text-align: left; width: 5.3382in" class="Default" />
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro21">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
    <tr class="ro21">
      <td style="text-align: left; width: 5.3382in" class="Default"> </td>
      <td style="text-align: left; width: 2.3008in" class="Default"> </td>
      <td style="text-align: left; width: 1.7535in" class="Default"> </td>
      <td style="text-align: left; width: 1.5992in" class="Default"> </td>
      <td style="text-align: left; width: 4.1807in" class="Default"> </td>
      <td style="text-align: left; width: 4.0689in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 1.0165in" class="Default"> </td>
      <td style="text-align: left; width: 1.1362in" class="Default"> </td>
      <td style="text-align: left; width: 1.122in" class="Default"> </td>
      <td style="text-align: left; width: 1.1429in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
      <td style="text-align: left; width: 0.8839in" class="Default"> </td>
    </tr>
  </table>
</body>
</html>`;
  return html;
};
