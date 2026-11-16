import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

const EditModal = ({ isOpen, note, onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // Jab modal open ho aur note mile, form pre-fill ho jaye
  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setDetails(note.details || "");
    }
  }, [note]);

  if (!isOpen) return null;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() && !details.trim()) return;
    onSave(title, details);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-[#E2E7E2] rounded-2xl w-full max-w-lg p-6 shadow-xl flex flex-col gap-5">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#F0F3F0]">
          <h2 className="text-xl font-bold text-[#343B36] tracking-tight">
            Edit Note
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="p-1.5 rounded-lg text-[#788078] hover:text-[#343B36] hover:bg-[#E8F1E9] transition-colors cursor-pointer"
            title="Cancel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Edit Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#555E57] uppercase tracking-wider">
              Title
            </label>
            <input
              type="text"
              placeholder="Note title..."
              className="w-full px-4 py-2.5 bg-[#FAFBF9] text-[#343B36] border border-[#E2E7E2] rounded-xl outline-none focus:bg-white focus:border-[#6B9B78] focus:ring-3 focus:ring-[#6B9B78]/15 text-sm font-medium transition-all"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#555E57] uppercase tracking-wider">
              Details
            </label>
            <textarea
              className="w-full h-32 px-4 py-2.5 bg-[#FAFBF9] text-[#343B36] border border-[#E2E7E2] rounded-xl outline-none focus:bg-white focus:border-[#6B9B78] focus:ring-3 focus:ring-[#6B9B78]/15 text-sm leading-relaxed resize-y font-normal transition-all"
              placeholder="Note details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-xl text-sm font-medium text-[#788078] hover:bg-[#F5F7F5] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#6B9B78] hover:bg-[#527D5E] text-white text-sm font-medium rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Check size={16} strokeWidth={2.5} />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;

