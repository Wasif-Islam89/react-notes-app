import React, { useState } from "react";
import { Plus, NotebookPen, StickyNote } from "lucide-react";
import NoteCard from "./components/NoteCard";
import EditModal from "./components/EditModal";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  // Edit Functionality State
  const [editIndex, setEditIndex] = useState(null);

  // 1. Add Note Function
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() && !details.trim()) return;

    const copyTask = [...task];

    copyTask.push({
      title,
      details,
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  // 2. Delete Note Function
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  // 3. Edit Note Function (Modal Open)
  const editNote = (idx) => {
    setEditIndex(idx);
  };

  // 4. Update Note Function (Save Changes)
  const updateNote = (updatedTitle, updatedDetails) => {
    const copyTask = [...task];
    copyTask[editIndex] = {
      ...copyTask[editIndex],
      title: updatedTitle,
      details: updatedDetails,
    };
    setTask(copyTask);
    setEditIndex(null);
  };

  // 5. Cancel Edit Function
  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F7F5] text-[#343B36] flex flex-col">
      {/* Top Navbar */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-[#E2E7E2] px-6 sm:px-10 py-4 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6B9B78] flex items-center justify-center text-white shadow-xs">
              <NotebookPen size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-[#343B36]">
                Notes App
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        {/* Left Column: Note Creation Form */}
        <div className="w-full lg:w-[420px] shrink-0 lg:sticky lg:top-24">
          <form
            onSubmit={submitHandler}
            className="bg-white border border-[#E2E7E2] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col gap-5 hover:border-[#6B9B78]/30 transition-colors"
          >
            <h2 className="text-2xl font-bold text-[#343B36] tracking-tight">
              Create New Note
            </h2>

            {/* Note Title Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#555E57] uppercase tracking-wider">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter your title"
                className="w-full px-4 py-3 bg-[#FAFBF9] text-[#343B36] placeholder-[#959E95] border border-[#E2E7E2] rounded-xl outline-none focus:bg-white focus:border-[#6B9B78] focus:ring-3 focus:ring-[#6B9B78]/15 transition-all text-sm font-medium"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Note Details Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#555E57] uppercase tracking-wider">
                Details
              </label>
              <textarea
                className="w-full h-36 px-4 py-3 bg-[#FAFBF9] text-[#343B36] placeholder-[#959E95] border border-[#E2E7E2] rounded-xl outline-none focus:bg-white focus:border-[#6B9B78] focus:ring-3 focus:ring-[#6B9B78]/15 transition-all text-sm leading-relaxed resize-y font-normal"
                placeholder="Write your note description"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-5 bg-[#6B9B78] hover:bg-[#527D5E] active:scale-[0.98] text-white font-medium text-sm rounded-xl transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex items-center justify-center gap-2 outline-none"
            >
              <Plus size={18} strokeWidth={2.5} />
              <span>Add Note</span>
            </button>
          </form>
        </div>

        {/* Right Column: Recent Notes List */}
        <div className="w-full flex-1 flex flex-col">
          <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#E2E7E2]">
            <h2 className="text-2xl font-bold text-[#343B36] tracking-tight">
              Recent Notes
            </h2>
          </div>

          {/* Empty State when no notes */}
          {task.length === 0 ? (
            <div className="w-full py-16 px-6 bg-white border border-[#E2E7E2] rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F1E9] text-[#527D5E] flex items-center justify-center mb-4">
                <StickyNote size={28} strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-[#343B36]">
                No notes created yet
              </h3>
            </div>
          ) : (
            <div className="flex flex-wrap items-start justify-start gap-4">
              {task.map((elem, idx) => (
                <NoteCard
                  key={idx}
                  note={elem}
                  index={idx}
                  onDelete={deleteNote}
                  onEdit={editNote}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Edit Note Modal (Separate Component) */}
      <EditModal
        isOpen={editIndex !== null}
        note={editIndex !== null ? task[editIndex] : null}
        onSave={updateNote}
        onCancel={cancelEdit}
      />
    </div>
  );
};

export default App;
