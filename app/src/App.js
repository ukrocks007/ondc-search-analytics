import React, { Component } from 'react';
import { TagCloud } from 'react-tagcloud';
import axios from "axios";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        const _this = this;
        axios.get("/analytics").then(res => {
            const dt = res.data.data;
            const item = Object.keys(dt.item).map(k => {
                return {
                    value: k, count: dt.item[k]
                }
            });
            const category = Object.keys(dt.category).map(k => {
                return {
                    value: k, count: dt.category[k]
                }
            });
            const provider = Object.keys(dt.provider).map(k => {
                return {
                    value: k, count: dt.provider[k]
                }
            });
            _this.setState({
                data: {
                    item,
                    category,
                    provider
                }
            });
        }).catch(e => console.log);
    }

    componentDidMount() {
        this.updateData();
        setInterval(this.updateData, 3000);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>ONDC Search Analytics</h2>
                </div>
                { this.state.data.item && (this.renderTagCloud("Item")) }
                { this.state.data.category && (this.renderTagCloud("Category")) }
                { this.state.data.provider && (this.renderTagCloud("Provider")) }
            </div>
        );
    }

    renderTagCloud(type) {
        return <div style={ { border: "1px solid black" } }><h3>{ type }</h3><TagCloud
            minSize={ 12 }
            maxSize={ 120 }
            shuffle={ true }
            tags={ this.state.data[type.toLowerCase()] } />
        </div>;
    }
}

export default App;
