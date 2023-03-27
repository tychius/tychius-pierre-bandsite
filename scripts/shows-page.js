const createButton = function (concert) {
  const button = document.createElement("button");
  button.textContent = "BUY TICKETS";
  return button;
};

const unselectRows = (currentRow) => {
  const children = currentRow.parentElement.querySelectorAll(".selected");
  children.forEach((row) => {
    if (row === currentRow) return;
    row.classList.remove("selected");
  });

  currentRow.classList.add("selected");
};

const concerts = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const tableBody = document.querySelector("table");
concerts.forEach((concert, index) => {
  const row = tableBody.insertRow();

  const dateCell = row.insertCell();
  dateCell.textContent = concert.date;
  dateCell.className = `date`;

  const venueCell = row.insertCell();
  venueCell.textContent = concert.venue;
  venueCell.className = `venue`;

  const locationCell = row.insertCell();
  locationCell.textContent = concert.location;
  locationCell.className = `location`;

  const actionCell = row.insertCell();
  actionCell.appendChild(createButton());
  actionCell.className = `action`;

  row.onclick = () => unselectRows(row);
});
