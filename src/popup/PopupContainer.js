import React, { useState, useEffect } from "react";
import PopupModal from "./PopupModal";

// export class MainPopup extends PureComponent {
//   state = { isShown: true };

//   showModal = () => {
//     this.setState({ isShown: true }, () => {
//       this.closeButton.focus();
//     });
//     this.resetMainScroll();
//   };

//   closeModal = () => {
//     this.setState({ isShown: false });
//     this.resetMainScroll();
//   };
//   onKeyDown = (event) => {
//     if (event.keyCode === 27) {
//       // escape key pressed
//       this.closeModal();
//     }
//   };
//   onModalClick = (event) => {
//     if (this.modal && this.modal.contains(event.target)) return;
//     this.closeModal();
//   };

//   resetMainScroll = () => {
//     document.querySelector("html").classList.toggle("modal__scroll-toggle");
//   };
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.isShown ? (
//           <PopupModal
//             onSubmit={this.props.onSubmit}
//             modalRef={(n) => (this.modal = n)}
//             buttonRef={(n) => (this.closeButton = n)}
//             closeModal={this.closeModal}
//             onKeyDown={this.onKeyDown}
//             onClickModal={this.onModalClick}
//           />
//         ) : null}
//       </React.Fragment>
//     );
//   }
// }

// export default MainPopup;

const MainPopup = ({ onSubmit }) => {
  let closeButton, modal;

  const [popupShown, setShownPopup] = useState(true);

  useEffect(() => {
    setShownPopup(true);
    closeButton.focus();
    resetMainScroll();
  }, []);

  const resetMainScroll = () => {
    document.querySelector("html").classList.toggle("modal__scroll-lock");
  };

  const closeModal = () => {
    setShownPopup(false);
    resetMainScroll();
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      // when escape is pressed while ont he modal/popup
      closeModal();
    }
  };

  const onModalClick = (event) => {
    if (modal && modal.contains(event.target)) return;
    closeModal();
  };

  return (
    <React.Fragment>
      {popupShown ? (
        <PopupModal
          onSubmit={onSubmit}
          modalRef={(n) => (modal = n)}
          buttonRef={(n) => (closeButton = n)}
          closeModal={closeModal}
          onKeyDown={onKeyDown}
          onClickModal={onModalClick}
        />
      ) : null}
    </React.Fragment>
  );
};

export default MainPopup;
