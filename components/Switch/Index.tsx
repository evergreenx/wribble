import React from 'react';
import * as Switch from '@radix-ui/react-switch';

const SwitchFeedBack = () => (
  <form>
    <div className="flex my-4">
      <label className="text-[#0d0c22] text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
      Looking for feedback
      </label>
      <Switch.Root
        className="w-[38px] h-[22px] bg-[#e7e7e9] border-none rounded-full relative  shadow-black focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
        id="feedback-mode"
        // style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
      >
        <Switch.Thumb className="block w-[14px] h-[14px] bg-[#9e9ea7] rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchFeedBack;