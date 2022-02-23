import { getRequests } from "./dataAccess.js";
import { deleteRequest } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests();

  const convertRequestsToListElement = (request) => {
    return `
        <li>
            ${request.description}
            <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
    `;
  };
  let html = `
        <ul>
            ${requests.map(convertRequestsToListElement).join("")}
        </ul>
    `;

  return html;
};

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("request--")) {
    const [, requestId] = click.target.id.split("--");
    deleteRequest(parseInt(requestId));
  }
});
