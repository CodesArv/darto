import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

import "./NoticeModal.css";
// import noticeModalStyle from "assets/jss/material-dashboard-react/views/pageStyle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

class NoticeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
      noticeModal: false,
      noticeModalHeader: "",
      noticeModalErrMsg: "",
    };
  }
  handleClose() {
    this.props.closeModal();
  }
  componentDidMount() {
    this.timeOutFunction = setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  static getDerivedStateFromProps(props, state) {
    if (props.noticeModal !== state.noticeModal) {
      let statusDetails = {};
      if (props.noticeModal) {
        statusDetails = {
          noticeModal: props.noticeModal,
          noticeModalHeader: props.noticeModalHeader,
          noticeModalErrMsg: props.noticeModalErrMsg,
        };
      }
      return {
        noticeModal: props.noticeModal,
        ...statusDetails,
      };
    }
    return null;
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          //   classes={{
          //     root: classes.center + " " + classes.modalRoot,
          //     paper: classes.modal,
          //   }}
          open={this.state.noticeModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose()}
          aria-labelledby='notice-modal-slide-title'
          aria-describedby='notice-modal-slide-description'
        >
          <DialogTitle
            id='notice-modal-slide-title'
            disableTypography
            //            style={{  borderBottom: "none",
            // paddingTop: "24px",
            // paddingRight: "24px",
            // paddingBottom: "0",
            // paddingLeft: "24px",
            // minHeight: "16.43px",}}
          >
            <h4
              style={{
                margin: "0",
                lineHeight: "1.42857143",
                fontSize: "16px",
              }}
            >
              {this.state.noticeModalHeader}
            </h4>
          </DialogTitle>
          <DialogContent
            id='notice-modal-slide-description'
            //         style={{ paddingTop: "24px",
            // paddingRight: "24px",
            // paddingBottom: "16px",
            // paddingLeft: "24px",
            // position: "relative",
            // overflow: "visible",  }}
          >
            <p style={{ fontSize: "16px" }}>{this.state.noticeModalErrMsg}</p>
          </DialogContent>
          <DialogActions

          //         style={{ padding: "15px",
          // textAlign: "right",
          // paddingTop: "0",
          // margin: "0",marginLeft: "auto",
          // marginRight: "auto", }}
          >
            <button
              onClick={() => this.handleClose()}
              color='info'
              style={{ width: "45px", padding: "5px", fontSize: "10px" }}
              round
            >
              OK
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

NoticeModal.propTypes = {
  classes: PropTypes.object.isRequired,
  noticeModal: PropTypes.bool.isRequired,
  noticeModalHeader: PropTypes.string,
  noticeModalErrMsg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default NoticeModal;
