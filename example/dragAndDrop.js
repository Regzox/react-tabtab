import React, {Component} from 'react';
import {Tabs, Panel} from '../';

export default class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beginDrag: '',
      dragIndex: '0',
      hoverIndex: '0'
    }
  }

  beginDrag() {
    this.setState({beginDrag: 'beginDrag'});
  }

  setMoveData(dragIndex, hoverIndex) {
    this.setState({dragIndex: dragIndex, hoverIndex: hoverIndex});
  }

  render() {
    return (
      <div>
        <h3>Try to drag one of the tab</h3>
        <p>dragIndex: {this.state.dragIndex}; hoverIndex: {this.state.hoverIndex}</p>

        <Tabs activeKey={2} 
              style="tabtab__folder__" 
              addBackTab={false}
              tabDeleteButton={false}
              deleteAllButton={false}
              draggable={true}
              beginDrag={::this.beginDrag}
              setMoveData={::this.setMoveData}>
          <Panel title="tab1">
            123121233132
          </Panel>
          <Panel title="tab2" lazy={true}>
            ypmn
          </Panel>
          <Panel title="tab3">
            sdfsdf
          </Panel>
          <Panel title="tab4">
            sdfsdf
          </Panel>
        </Tabs>
      </div>
    )
  }
}