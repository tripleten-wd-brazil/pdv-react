export const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup_image ${card ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button
          className="popup__close-button popup__close-button_image"
          onClick={onClose}
        >
          X
        </button>
        <img src={card?.image} alt={card?.name} className="popup__image" />
        <span className="popup__image-caption">{card?.name}</span>
      </div>
    </div>
  );
};
