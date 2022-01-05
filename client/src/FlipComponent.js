import React from "react";
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

export default class FlipComponent extends React.Component {
  constructor(props) {
    super(props);
    this._tickRef = React.createRef();
  }

  componentDidMount() {
    this._tickInstance = Tick.DOM.create(this._tickRef.current, {
      value: this.props.value,
      repeat: true,
      view: {
        children: [
          {
            root: "div",
            repeat: true,
            layout: 'horizontal center',
            children: [
              {
                view: "flip",
                children: [
                  {
                    view: "tick-flip-card",
                    repeat: true,
                  }
                ]
              }
            ]
          }
        ]
      }
    });
  }

  componentDidUpdate() {
    if (!this._tickInstance) return;
    this._tickInstance.value = this.props.value;
  }

  componentWillUnmount() {
    if (!this._tickInstance) return;
    Tick.DOM.destroy(this._tickRef.current);
  }

  render() {
    return (
      <div id={this.props.id} ref={this._tickRef} className="tick">
      </div>
    );
  }
}
