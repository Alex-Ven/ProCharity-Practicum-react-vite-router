import React, { useState } from 'react';
import './Tooltip.scss';

type TooltipProps = {
  text: string; // Текст всплывающей подсказки
  children: React.ReactNode; // Элемент, к которому привязана подсказка
};

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && <span className="tooltip__text">{text}</span>}
    </div>
  );
};
