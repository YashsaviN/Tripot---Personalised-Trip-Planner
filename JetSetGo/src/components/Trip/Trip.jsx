import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, CalendarDays, ListTodo } from "lucide-react";

const Dashboard = () => {
    const [trips, setTrips] = useState([]);
    const [activeTrip, setActiveTrip] = useState(null);

    const [activeTab, setActiveTab] = useState("budget");
    const [budgetItems, setBudgetItems] = useState([]);
    const [expense, setExpense] = useState("");
    const [amount, setAmount] = useState("");
    const [itinerary, setItinerary] = useState([]);
    const [activity, setActivity] = useState("");
    const [dateTime, setDateTime] = useState(new Date());
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    useEffect(() => {
        const savedTrip = localStorage.getItem("activeTrip");
        if (savedTrip) setActiveTrip(JSON.parse(savedTrip));
    }, []);

    const addBudgetItem = () => {
        if (expense && amount) {
            const updatedBudget = [...budgetItems, { expense, amount }];
            setBudgetItems(updatedBudget);

            const updatedTrip = { ...activeTrip, budgetItems: updatedBudget };
            setActiveTrip(updatedTrip);
            localStorage.setItem("activeTrip", JSON.stringify(updatedTrip));

            setExpense("");
            setAmount("");
        }
    };

    const removeBudgetItem = (index) => {
        const updatedBudget = budgetItems.filter((_, i) => i !== index);
        setBudgetItems(updatedBudget);

        const updatedTrip = { ...activeTrip, budgetItems: updatedBudget };
        setActiveTrip(updatedTrip);
        localStorage.setItem("activeTrip", JSON.stringify(updatedTrip));
    };


    const addItineraryItem = () => {
        if (activity && dateTime) {
            const updatedItinerary = [...itinerary, { activity, dateTime }];
            setItinerary(updatedItinerary);

            const updatedTrip = { ...activeTrip, itinerary: updatedItinerary };
            setActiveTrip(updatedTrip);
            localStorage.setItem("activeTrip", JSON.stringify(updatedTrip));

            setActivity("");
            setDateTime("");
        }
    };

    const removeItineraryItem = (index) => {
        const updatedItinerary = itinerary.filter((_, i) => i !== index);
        setItinerary(updatedItinerary);

        const updatedTrip = { ...activeTrip, itinerary: updatedItinerary };
        setActiveTrip(updatedTrip);
        localStorage.setItem("activeTrip", JSON.stringify(updatedTrip));
    };


    const addTask = () => {
        if (task) {
            const updatedTasks = [...tasks, task]; 
            setTasks(updatedTasks);

            const updatedTrip = { ...activeTrip, tasks: updatedTasks };
            setActiveTrip(updatedTrip);
            localStorage.setItem("activeTrip", JSON.stringify(updatedTrip));

            setTask("");
        }
    };


    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

        const updatedTrip = { ...activeTrip, tasks: updatedTasks };
        setActiveTrip(updatedTrip);
        localStorage.setItem("activeTrip", JSON.stringify(updatedTrip));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-orange-200 to-orange-300 py-10 px-5">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center font-serif text-white drop-shadow-lg">
                </h1>

                <div className="flex justify-center space-x-8 border-b-2 border-white/50 mb-8">
                    {[
                        { id: "budget", label: "Budget", icon: <Wallet size={18} /> },
                        { id: "itinerary", label: "Itinerary", icon: <CalendarDays size={18} /> },
                        { id: "todo", label: "To-Do", icon: <ListTodo size={18} /> },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-3 flex items-center gap-2 text-lg transition-all ${activeTab === tab.id
                                ? "border-b-4 border-white text-white font-semibold"
                                : "text-white/70 hover:text-white"
                                }`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                <div className="mt-6">
                    <AnimatePresence mode="wait">
                        {activeTab === "budget" && (
                            <motion.div
                                key="budget"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-6"
                            >
                                <h2 className="text-2xl font-semibold mb-4 text-white">Budget Planner</h2>
                                <div className="flex gap-2 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Expense"
                                        value={expense}
                                        onChange={(e) => setExpense(e.target.value)}
                                        className="border p-2 rounded flex-1 focus:ring-2 focus:ring-white"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="border p-2 rounded w-32 focus:ring-2 focus:ring-white"
                                    />
                                    <button
                                        onClick={addBudgetItem}
                                        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-white/80 transition"
                                    >
                                        Add
                                    </button>
                                </div>
                                <ul className="space-y-2">
                                    {budgetItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center border p-2 rounded bg-white/60"
                                        >
                                            <span className="text-gray-800">{item.expense}: ${item.amount}</span>
                                            <button
                                                onClick={() => removeBudgetItem(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ✕
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {activeTab === "itinerary" && (
                            <motion.div
                                key="itinerary"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-6"
                            >
                                <h2 className="text-2xl font-semibold mb-4 text-white">Itinerary</h2>
                                <div className="flex gap-2 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Activity"
                                        value={activity}
                                        onChange={(e) => setActivity(e.target.value)}
                                        className="border p-2 rounded flex-1 focus:ring-2 focus:ring-white"
                                    />
                                    <DatePicker
                                        selected={dateTime}
                                        onChange={(date) => setDateTime(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="border p-2 rounded focus:ring-2 focus:ring-white"
                                    />
                                    <button
                                        onClick={addItineraryItem}
                                        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-white/80 transition"
                                    >
                                        Add
                                    </button>
                                </div>
                                <ul className="space-y-2">
                                    {itinerary.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center border p-2 rounded bg-white/60"
                                        >
                                            <span className="text-gray-800">
                                                {item.activity} —{" "}
                                                {item.dateTime.toLocaleDateString()}{" "}
                                                {item.dateTime.toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </span>
                                            <button
                                                onClick={() => removeItineraryItem(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ✕
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {activeTab === "todo" && (
                            <motion.div
                                key="todo"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-6"
                            >
                                <h2 className="text-2xl font-semibold mb-4 text-white">To-Do List</h2>
                                <div className="flex gap-2 mb-4">
                                    <input
                                        type="text"
                                        placeholder="New Task"
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                        className="border p-2 rounded flex-1 focus:ring-2 focus:ring-white"
                                    />
                                    <button
                                        onClick={addTask}
                                        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-white/80 transition"
                                    >
                                        Add
                                    </button>
                                </div>
                                <ul className="space-y-2">
                                    {tasks.map((t, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center border p-2 rounded bg-white/60"
                                        >
                                            <span className="text-gray-800">{t}</span>
                                            <button
                                                onClick={() => removeTask(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ✕
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
