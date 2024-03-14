import styled from 'styled-components';
import { Table } from 'antd';

export const TABLE = {
  background: {
    hoverRow: '#fcefe2',
    selectedRow: '#e6f7ff',
    hoverSelectedRow: '#dcf4ff',
    header: '#c5ced9',
  },
};

const StyleRowTable =
  "overflow: hidden; position: relative; max-height: 22px; margin-right: -1em; padding-right: 1em; width: 100%; :before {   content: '...';   position: absolute;   right: 0;   bottom: 0; } :after {   content: '';   position: absolute;   right: 0;   width: 1em;   height: 2em;   margin-top: 0.2em;   background: white; }";

const TableEtn = styled(Table)`
  /*height: calc(100% - 46px);*/

  .ant-table-wrapper {
    border-radius: 16px;
    box-shadow: unset;
  }

  /*.ant-spin-nested-loading {
    height: 100%;
  }

  .ant-spin-container {
    height: 100%;
  }*/

  .ant-table {
    font-size: 1em;
    color: #212529;
    font-weight: 400;
    /*height: 100%;*/
  }

  .ant-table-header {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .ant-table-body {
    overflow: auto !important;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    /*max-height: calc(100% - 50px) !important;*/
  }

  .ant-table-container {
    border-radius: 16px;
    border: 1px solid ${props =>
      props.headerBackgroundColor || TABLE.background.header};
    border-top: none;
    /*height: 100%;*/
  }

  .ant-table-thead > tr > th {
    font-size: 1em;
    background-color: ${props =>
      props.headerBackgroundColor || TABLE.background.header};
    font-weight: 700;
    height: 50px !important;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > th,
  .ant-table tfoot > tr > td {
    padding: 8.5px 10px;
  }

  .ant-table .ant-table-expanded-row-fixed {
    margin: -8.5px -18px;
  }

  .ant-table-pagination {
    display: none;
  }

  .ant-table-body::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background-color: unset;
    border-radius: 8px;
  }

  .ant-table-body::-webkit-scrollbar-track {
    margin-bottom: 10px;
    margin-left: 10px;
    border-radius: 6px;
    background: white;
  }

  .ant-table-body::-webkit-scrollbar-thumb {
    border-radius: 6px;
    height: 117px;
    background: #c4c4c4;
    border: 1px solid #aaa;
  }

  .ant-table-body::-webkit-scrollbar-thumb:hover {
    background: white;
  }

  .ant-table-body::-webkit-scrollbar-corner {
    display: none;
  }

  .ant-table-body::-webkit-scrollbar-thumb:active {
    background: white};
  }

  .ant-table-body::-webkit-scrollbar-track-piece {
    background-color: rgb(255, 255, 255);
  }

  .ant-table-ping-right:not(.ant-table-has-fix-right)
    .ant-table-container::after {
    box-shadow: none;
  }
  .ant-table-ping-left:not(.ant-table-has-fix-left)
    .ant-table-container::before {
    box-shadow: none;
  }

  .ant-table-cell-scrollbar {
    box-shadow: none;
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    display: none;
  }

  .icon-row-layout {
    display: none;
  }

  .ant-table-row:hover {
    background: ${props =>
      props.hoverBackgroundColor || TABLE.background.hoverRow};
  }

  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: none;
  }

  .ant-table-row:hover .icon-row-layout {
    margin: -8px 0 -8px -12px;
    display: flex;
  }

  .ant-table-row:hover .text-status-layout {
    display: none;
  }

  .ant-table-tbody > tr {
    cursor: pointer;
  }

  .ant-table-tbody > tr > td > div {
    ${props => (props.isExpand ? StyleRowTable : null)}

  }

  .ant-table-tbody > tr > td {
    transition: none;
  }

  .ant-table-tbody > tr:hover > td > div {
    :after {
      background: ${TABLE.background.hoverRow};
    }
  }

  .ant-table-tbody > tr.ant-table-row-selected > td > div {
    :after {
      background: ${TABLE.background.selectedRow};
    }
  }

  .ant-table-tbody > tr.ant-table-row-selected:hover > td > div {
    :after {
      background: ${TABLE.background.hoverSelectedRow};
    }
  }

  .ant-checkbox-wrapper {
    margin: -3px -1px;
  }

  .ant-table-column-sort {
    background: none;
  }
  .ant-table-expanded-row-fixed {
    max-height: max-content !important;
  }

  .ant-table-tbody > tr.ant-table-placeholder:hover > td > div {
    :after {
      background: white;
    }
  }
`;

const ContainerPagination = styled.div`
  margin-top: 14px;
  display: ${props => (props.pagination ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-end;

  .ant-pagination,
  .ant-pagination-simple .ant-pagination-simple-pager input,
  .ant-pagination-simple .ant-pagination-prev,
  .ant-pagination-simple .ant-pagination-next,
  .ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-simple .ant-pagination-next .ant-pagination-item-link {
    height: 32px;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 4px;
  }

  .ant-pagination-simple .ant-pagination-simple-pager input {
    border-radius: 4px;
    padding: 0;
  }
`;

export { TableEtn, ContainerPagination };
