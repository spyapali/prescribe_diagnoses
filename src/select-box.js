import React from 'react'

import './index.css'

class SelectBox extends React.Component {
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && "",
        showDiagnosis: false,
        selectedDiagnosis: this.props.selectedDiagnosis || "Please Select Diagnosis"
    };

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    }

    selectItem = (item) => this.setState ({
        selectedItem: item,
        showItems: false,
        showDiagnosis: true,
        selectedDiagnosis: item.id
    })



    render() {
        return <div>
        <div className="select-box--box"
             style={{width: this.props.width || 180}}
             defaultValue="See Diagnosis Here"
        >
            <div
                className="select-box--container"

            >
                <div
                className="select-box--selected-item"
                >{ this.state.selectedItem.value }
                </div>
                <div
                    className="select-box--arrow"
                    onClick={this.dropDown}
                >
                    <span
                        className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} />

                </div>

                <div

                    style={{display: this.state.showItems? 'block': 'none'}}
                    className="select-box--items"
                >

                    {
                        this.state.items.map(item => <div
                            key = { item.id }
                            onClick = {() => this.selectItem(item)}
                            className={this.state.selectedItem === item? 'selected': ""}
                        >
                            { item.value }
                        </div>)
                    }
                </div>
             </div>
            </div>

            <div className={this.state.showDiagnosis ? 'show--diagnosis': 'show--default'}>
                 {this.state.selectedDiagnosis}
            </div>
        </div>
    }
}

export default SelectBox