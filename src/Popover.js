import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from './BootstrapMixin';
import CustomPropTypes from './utils/CustomPropTypes';

const Popover = React.createClass({

  mixins: [ BootstrapMixin ],

  propTypes: {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: CustomPropTypes.isRequiredForA11y(React.PropTypes.string),

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * The "left" position value for the Popover.
     */
    positionLeft: React.PropTypes.number,
    /**
     * The "top" position value for the Popover.
     */
    positionTop: React.PropTypes.number,
    /**
     * The "left" position value for the Popover arrow.
     */
    arrowOffsetLeft: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    /**
     * The "top" position value for the Popover arrow.
     */
    arrowOffsetTop: React.PropTypes.oneOfType([
      React.PropTypes.number, React.PropTypes.string
    ]),
    /**
     * Title text
     */
    title: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      placement: 'right'
    };
  },

  render() {
    const classes = {
      'popover': true,
      [this.props.placement]: true
    };

    const style = {
      'left': this.props.positionLeft,
      'top': this.props.positionTop,
      'display': 'block'
    };

    const arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return (
      <div role='tooltip' {...this.props} className={classNames(this.props.className, classes)} style={style} title={null}>
        <div className="arrow" style={arrowStyle} />
        {this.props.title ? this.renderTitle() : null}
        <div className="popover-content">
          {this.props.children}
        </div>
      </div>
    );
  },

  renderTitle() {
    return (
      <h3 className="popover-title">{this.props.title}</h3>
    );
  }
});

export default Popover;
