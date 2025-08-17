import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Trip = () => {
  const [activeTab, setActiveTab] = useState("budget");

  // Budget State
  const [budgetItems, setBudgetItems] = useState([]);
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  // Itinerary State
  const [itinerary, setItinerary] = useState([]);
  const [activity, setActivity] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  // To-Do State
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Budget Handlers
  const addBudgetItem = () => {
    if (expense && amount) {
      setBudgetItems([...budgetItems, { expense, amount }]);
      setExpense("");
      setAmount("");
    }
  };
  const removeBudgetItem = (index) => {
    setBudgetItems(budgetItems.filter((_, i) => i !== index));
  };

  // Itinerary Handlers
  const addItineraryItem = () => {
    if (activity && dateTime) {
      setItinerary([...itinerary, { activity, dateTime }]);
      setActivity("");
      setDate(new Date());
    }
  };
  const removeItineraryItem = (index) => {
    setItinerary(itinerary.filter((_, i) => i !== index));
  };

  // To-Do Handlers
  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6"></h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b-2 border-gray-200 mb-6">
        {["budget", "itinerary", "todo"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 capitalize ${
              activeTab === tab
                ? "border-b-4 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Budget Tab */}
      {activeTab === "budget" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Budget Planner</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Expense"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 rounded w-32"
            />
            <button
              onClick={addBudgetItem}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {budgetItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>
                  {item.expense}: ${item.amount}
                </span>
                <button
                  onClick={() => removeBudgetItem(index)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Itinerary Tab */}
      {activeTab === "itinerary" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <DatePicker
              selected={dateTime}
              onChange={(date) => setDateTime(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="border p-2 rounded"
            />
            <button
              onClick={addItineraryItem}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {itinerary.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>
                  {item.activity} —{" "}
                  {item.dateTime.toLocaleDateString()}{" "}
                  {item.dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
                <button
                  onClick={() => removeItineraryItem(index)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* To-Do List Tab */}
      {activeTab === "todo" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="New Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((t, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>{t}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Trip;
