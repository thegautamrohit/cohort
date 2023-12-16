const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const user = users[0];
  const noOfKidneys = user.kidneys.length;
  const healthyKidneys = user.kidneys.filter((kid) => kid.healthy).length;
  const unhealthyKidneys = noOfKidneys - healthyKidneys;

  res.json({
    no_of_kidneys: noOfKidneys,
    healthyKidneys: healthyKidneys,
    unhealthyKidneys: unhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;

  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.send({
    msg: "Kidney successfully updated",
  });
});

app.put("/", function (req, res) {
  users[0]?.kidneys?.map((item) => {
    item.healthy = true;
  });

  res.send({
    msg: "Updated",
  });
});

app.delete("/", function (req, res) {
  let healthyKidneys = users[0]?.kidneys.filter((kidney) => kidney.healthy);

  users[0].kidneys = healthyKidneys;

  res.send({
    msg: "Successfully Updated",
  });
});

app.listen("3003");
