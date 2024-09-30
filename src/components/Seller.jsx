import avatarMock from "../images/avatar_mock.png";
import editIcon from "../images/edit.svg";

export default function Seller() {
  return (
    <div className="seller">
      <article className="seller__card">
        <figure>
          <img
            src={avatarMock}
            alt="Seller avatar image"
            className="seller__avatar"
          />
        </figure>
        <div className="seller__data">
          <h2 className="seller__name" />
          <h3 className="seller__job" />
        </div>
        <button className="seller__edit">
          <img
            src={editIcon}
            alt="Edit seller data"
            className="seller__edit-icon"
          />
          <span className="seller__edit-label">Editar</span>
        </button>
      </article>
    </div>
  );
}
