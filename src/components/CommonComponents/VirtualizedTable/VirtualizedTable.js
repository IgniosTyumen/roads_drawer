import React, {Fragment, PureComponent} from "react";
import {Button, Icon, Input, Table} from "antd";
import Highlighter from "react-highlight-words";
import {VTComponents, VTScroll} from "virtualizedtableforantd";

const ctx = {top: 0};

// class VirtualizedTable extends React.Component {
class VirtualizedTable extends PureComponent {

    constructor(...args) {
        super(...args);
    }

    state = {
        searchText: '',
        searchedColumn: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Поиск`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    icon="search"
                    size="small"
                    style={{width: 90, marginRight: 8}}
                >
                    Поиск
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                    Сбросить
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{color: filtered ? '#1890ff' : undefined}} title={"Поиск"}/>
        ),
        onFilter: (value, record) => {
            if (typeof (record[dataIndex]) === "boolean"){
                if (value.toLowerCase().includes('д')){
                    return record[dataIndex]
                } else {
                    return !record[dataIndex]
                }
            } else
            return record[dataIndex] ? record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()) : false
        },


        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : null}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({searchText: ''});
    };

    handleResize = index => (e, {size}) => {
        this.setState(({columns}) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return {columns: nextColumns};
        });
    };

    componentDidMount() {
        VTScroll(this.props.virtualId, {top: ctx.top});
    }

    componentWillUnmount() {
        ctx.top = VTScroll(this.props.virtualId).top;
    }

    render() {
        const alphabeticalSorter = (a, b, field) => {
            if (a[field] && b[field]) {
                const A = a[field].toUpperCase();
                const B = b[field].toUpperCase();
                if (A < B) return -1;
                if (A > B) return 1;
                return 0;
            } else if (a[field]) {
                return 1
            } else if (b[field]) {
                return -1
            } else return -1
        };

        const numericSorter = (a, b, field) => {
            if (typeof (a[field]) === 'number' && typeof (b[field]) === 'number') {
                return a[field] - b[field]
            } else if (typeof (a[field]) === 'number') {
                return 1
            } else if (typeof (b[field]) === 'number') {
                return -1
            } else return -1
        };

        let columns = [];
        for (let it = 0; it < this.props.columns.length; it++) {
            const propsObj = this.props.columns[it];
            let renderCallback = propsObj.customRenderer;

            let newColumn = {
                title: propsObj.title,
                dataIndex: propsObj.key,
                width: propsObj.width,
                sorter: propsObj.type === 'number' ? (a, b) => numericSorter(a, b, propsObj.key) : propsObj.type === 'string' ? (a, b) => alphabeticalSorter(a, b, propsObj.key) : null,
                ...this.getColumnSearchProps(propsObj.key),
            };
            if (renderCallback) {
                newColumn.render = (text, record) => renderCallback(text, record)
            }
            columns.push(newColumn)
        }
        const dataSource = this.props.data;
        return (
            <Fragment>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    scroll={{y: this.props.height || '79vh'}}
                    size="small"
                    pagination={false}
                    width='auto'
                    rowKey={record => record.id}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: this.props.onRowClick ? () => this.props.onRowClick(record) : null, // click row
                            onDoubleClick: this.props.onRowDoubleClick ? () => this.props.onRowDoubleClick(record) : null, // double click row
                            onContextMenu: this.props.onRowRightClick ? () => this.props.onRowRightClick(record) : null, // right button click row
                            onMouseEnter: this.props.onRowMouseEnter ? () => this.props.onRowMouseEnter(record) : null, // mouse enter row
                            onMouseLeave: this.props.onRowMouseLeave ? () => this.props.onRowMouseLeave(record) : null, // mouse leave row
                        };
                    }}
                    components={
                        VTComponents({
                            id: this.props.virtualId,
                            onScroll: ({left, top}) => ctx.top = top

                        })
                    }
                    onChange={(a, b, c, actualData) => {
                        this.props.containerCallback ?
                            this.props.containerCallback(actualData.currentDataSource)
                            :
                            null
                    }}
                />
            </Fragment>
        )
    }
}

export default VirtualizedTable;
