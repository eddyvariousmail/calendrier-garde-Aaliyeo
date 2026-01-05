const PASSWORD = "Aaliyeo";

function generateYear(year) {
  return [
    {
      title: "Père",
      start: `${year}-01-01`,
      end: `${year}-01-03`,
      className: "pere"
    },
    {
      title: "Mère",
      start: `${year}-01-03`,
      end: `${year}-01-06`,
      className: "mere"
    }
  ];
}
