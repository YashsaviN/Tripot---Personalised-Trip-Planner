import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, CalendarDays, ListTodo, Plane } from "lucide-react";

const Dashboard = () => {
    const [trips, setTrips] = useState([]);
    const [activeTrip, setActiveTrip] = useState(null);

    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
        const savedTrips = localStorage.getItem("trips");
        if (savedTrips) {
            const parsedTrips = JSON.parse(savedTrips);
            setTrips(parsedTrips);
            if (parsedTrips.length > 0) setActiveTrip(parsedTrips[0]);
        }
    }, []);


    const saveTrips = (updatedTrips) => {
        setTrips(updatedTrips);
        localStorage.setItem("trips", JSON.stringify(updatedTrips));
    };

    const createTrip = () => {
        if (!destination) return;
        const newTrip = {
            id: Date.now(),
            destination,
            startDate,
            endDate,
            budgetItems: [],
            itinerary: [],
            tasks: []
        };
        const updatedTrips = [...trips, newTrip];
        saveTrips(updatedTrips);
        setActiveTrip(newTrip);
        setDestination("");
    };

    const selectTrip = (trip) => {
        setActiveTrip(trip);
        setBudgetItems(trip.budgetItems || []);
        setItinerary(trip.itinerary || []);
        setTasks(trip.tasks || []);
    };


    const addBudgetItem = () => {
        if (expense && amount && activeTrip) {
            const updatedBudget = [...budgetItems, { expense, amount }];
            setBudgetItems(updatedBudget);

            const updatedTrip = { ...activeTrip, budgetItems: updatedBudget };
            const updatedTrips = trips.map((t) =>
                t.id === activeTrip.id ? updatedTrip : t
            );
            saveTrips(updatedTrips);
            setActiveTrip(updatedTrip);

            setExpense("");
            setAmount("");
        }
    };

    const removeBudgetItem = (index) => {
        const updatedBudget = budgetItems.filter((_, i) => i !== index);
        setBudgetItems(updatedBudget);

        const updatedTrip = { ...activeTrip, budgetItems: updatedBudget };
        const updatedTrips = trips.map((t) =>
            t.id === activeTrip.id ? updatedTrip : t
        );
        saveTrips(updatedTrips);
        setActiveTrip(updatedTrip);
    };


    const addItineraryItem = () => {
        if (activity && dateTime && activeTrip) {
            const updatedItinerary = [...itinerary, { activity, dateTime }];
            setItinerary(updatedItinerary);

            const updatedTrip = { ...activeTrip, itinerary: updatedItinerary };
            const updatedTrips = trips.map((t) =>
                t.id === activeTrip.id ? updatedTrip : t
            );
            saveTrips(updatedTrips);
            setActiveTrip(updatedTrip);

            setActivity("");
        }
    };

    const removeItineraryItem = (index) => {
        const updatedItinerary = itinerary.filter((_, i) => i !== index);
        setItinerary(updatedItinerary);

        const updatedTrip = { ...activeTrip, itinerary: updatedItinerary };
        const updatedTrips = trips.map((t) =>
            t.id === activeTrip.id ? updatedTrip : t
        );
        saveTrips(updatedTrips);
        setActiveTrip(updatedTrip);
    };


    const addTask = () => {
        if (task && activeTrip) {
            const updatedTasks = [...tasks, task];
            setTasks(updatedTasks);

            const updatedTrip = { ...activeTrip, tasks: updatedTasks };
            const updatedTrips = trips.map((t) =>
                t.id === activeTrip.id ? updatedTrip : t
            );
            saveTrips(updatedTrips);
            setActiveTrip(updatedTrip);

            setTask("");
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

        const updatedTrip = { ...activeTrip, tasks: updatedTasks };
        const updatedTrips = trips.map((t) =>
            t.id === activeTrip.id ? updatedTrip : t
        );
        saveTrips(updatedTrips);
        setActiveTrip(updatedTrip);
    };

    return (
        <div className="pt-20 px-6 min-h-screen flex bg-gradient-to-br from-blue-400 via-orange-200 to-orange-300">
            <div className="min-h-screen flex bg-gradient-to-br from-blue-400 via-orange-200 to-orange-300 w-full max-w-4xl mx-auto">
                <div className="w-64 bg-white/30 backdrop-blur-md p-4 border-r border-white/40">
                    <ul className="space-y-2 mb-4">
                        {trips.map((trip) => (
                            <li
                                key={trip.id}
                                onClick={() => selectTrip(trip)}
                                className={`cursor-pointer p-2 rounded ${activeTrip?.id === trip.id
                                        ? "bg-white/70 text-blue-600 font-semibold"
                                        : "bg-white/40 text-gray-800"
                                    }`}
                            >
                                ✈ {trip.destination}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <h3 className="text-white font-semibold mb-2">New Trip</h3>
                        <input
                            type="text"
                            placeholder="Destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="border p-2 w-full rounded mb-2"
                        />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="border p-2 w-full rounded mb-2"
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            className="border p-2 w-full rounded mb-2"
                        />
                        <button
                            onClick={createTrip}
                            className="bg-white text-blue-500 px-4 py-2 w-full rounded hover:bg-white/80"
                        >
                            Save Trip
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-8">
                    {activeTrip ? (
                        <>
                            <h1 className="text-3xl font-bold text-white drop-shadow mb-4">
                                {activeTrip.destination} ({new Date(activeTrip.startDate).toLocaleDateString()} -{" "}
                                {new Date(activeTrip.endDate).toLocaleDateString()})
                            </h1>

                            <div className="flex space-x-8 border-b-2 border-white/50 mb-8">
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
                                                        <span className="text-gray-800">
                                                            {item.expense}: ${item.amount}
                                                        </span>
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
                                                            {new Date(item.dateTime).toLocaleDateString()}{" "}
                                                            {new Date(item.dateTime).toLocaleTimeString([], {
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
                        </>
                    ) : (
                        <p className="text-white">No trip selected. Create one on the left.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
