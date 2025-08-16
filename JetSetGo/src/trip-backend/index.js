import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/plan-trip", (req, res) => {
  const { destination, budget, startDate, endDate } = req.body;

  const budgetBreakdown = {
    flights: budget * 0.4,
    hotel: budget * 0.3,
    food: budget * 0.2,
    activities: budget * 0.1,
  };

  const itinerary = [
    { day: 1, activity: "Explore Old Town" },
    { day: 2, activity: "Visit Museum" },
    { day: 3, activity: "Local Food Tour" },
  ];

  const todo = [
    "Check passport",
    "Book flight",
    "Book hotel",
    "Pack bags",
  ];

  res.json({ budgetBreakdown, itinerary, todo });
});
