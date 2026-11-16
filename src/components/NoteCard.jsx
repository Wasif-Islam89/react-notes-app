import React from "react";
import { Pencil, Trash2, Calendar } from "lucide-react";

const NoteCard = ({ note, index, onDelete, onEdit }) => {
  return (
    <div className="group relative w-full sm:w-[calc(50%-0.5rem)] bg-white border border-[#E2E7E2] hover:border-[#6B9B78]/60 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      {/* Top Header: Title & Action Icons */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="font-semibold text-lg text-[#343B36] tracking-tight leading-snug break-words flex-1">
            {note.title || "Untitled Note"}
          </h3>

          {/* Action Buttons: Edit & Delete */}
          <div className="flex items-center gap-1 shrink-0 -mt-1 -mr-1">
            {/* Edit Icon Button */}
            <button
              type="button"
              onClick={() => onEdit(index)}
              className="p-1.5 rounded-lg text-[#788078] hover:text-[#527D5E] hover:bg-[#E8F1E9] active:scale-95 transition-colors cursor-pointer"
              title="Edit Note"
              aria-label="Edit Note"
            >
              <Pencil size={15} strokeWidth={2} />
            </button>

            {/* Delete Icon Button (Functional) */}
            <button
              type="button"
              onClick={() => onDelete(index)}
              className="p-1.5 rounded-lg text-[#788078] hover:text-red-500 hover:bg-red-50 active:scale-95 transition-colors cursor-pointer"
              title="Delete Note"
              aria-label="Delete Note"
            >
              <Trash2 size={15} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Note Details */}
        <p className="text-sm text-[#555E57] leading-relaxed break-words whitespace-pre-wrap">
          {note.details}
        </p>
      </div>

      {/* Card Footer: Metadata / Note Number */}
      <div className="mt-4 pt-3 border-t border-[#F0F3F0] flex items-center justify-between text-xs text-[#959E95]">
        <span className="flex items-center gap-1.5">
          <Calendar size={13} className="opacity-70" />
          {note.createdAt || "Just now"}
        </span>
        <span className="font-medium px-2 py-0.5 bg-[#F5F7F5] rounded-full text-[11px] text-[#788078]">
          #{index + 1}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;

