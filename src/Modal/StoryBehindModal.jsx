import React, { useEffect } from "react";

function StoryBehindModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white py-16 max-w-6xl w-full max-h-[70vh] md:max-h-[90vh] overflow-y-auto scrollbar-hide rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold font-manrope text-primaryDark mb-6">
              The Story Behind{" "}
              <span className="text-[#F39770]">MySunlight</span>
            </h2>

            {/* Subtitle */}
            <h3 className="text-xl md:text-2xl font-semibold font-manrope text-primaryDark mb-12">
              Inspired by Personal Loss
            </h3>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-primaryDark font-manrope leading-relaxed mb-6">
                MySunlight is dedicated to my wife, Khushboo, who lost her
                brother Puneet. On the day of his funeral, a cloudy sky gave way
                to sunshine. Ever since, whenever we see the sun shining, it
                feels like Puneet's reminder of hope.
              </p>

              <p className="text-primaryDark font-manrope font-bold leading-relaxed mb-6">
                MySunlight is dedicated to my wife, Khushboo, who lost her
                brother Puneet. On the day of his funeral, a cloudy sky gave way
                to sunshine. Ever since, whenever we see the sun shining, it
                feels like Puneet's reminder of hope.
              </p>

              <p className="text-primaryDark font-manrope leading-relaxed mb-6">
                MySunlight is dedicated to my wife, Khushboo, who lost her
                brother Puneet. On the day of his funeral, a cloudy sky gave way
                to sunshine. Ever since, whenever we see the sun shining, it
                feels like Puneet's reminder of hope.MySunlight is dedicated to
                my wife, Khushboo, who lost her brother Puneet. On the day of
                his funeral, a cloudy sky gave way to sunshine. Ever since,
                whenever we see the sun shining, it feels like Puneet’s reminder
                of hope.MySunlight is dedicated to my wife, Khushboo, who lost
                her brother Puneet. On the day of his funeral, a cloudy sky gave
                way to sunshine. Ever since, whenever we see the sun shining, it
                feels like Puneet’s reminder of hope.{" "}
              </p>

              <p className="text-primaryDark font-manrope leading-relaxed mb-6">
                MySunlight is dedicated to my wife, Khushboo, who lost her
                brother Puneet. On the day of his funeral, a cloudy sky gave way
                to sunshin. Ever since, whenever we see the sun shining, it
                feels like Puneet's reminder of hope.MySunlight is dedicated to
                my wife, Khushboo, who lost her brother Puneet. On the day of
                his funeral, a cloudy sky gave way to sunshin. Ever since,
                whenever we see the sun shining, it feels like Puneet’s reminder
                of hope.MySunlight is dedicated to my wife, Khushboo, who lost
                her brother Puneet. On the day of his funeral, a cloudy sky gave
                way to sunshin. Ever since, whenever we see the sun shining, it
                feels like Puneet’s reminder of hope.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryBehindModal;
