import React, { useState } from 'react';

const InputMultipleLinks = ({
  links,
  onLinksChange,
  placeholder = 'Enter a link',
  className,
}: {
  links: string[];
  onLinksChange: (links: string[]) => void;
  placeholder?: string;
  className?: string;
}) => {
  const [newLink, setNewLink] = useState('');

  const addLink = () => {
    if (newLink.trim() !== '') {
      onLinksChange([...links, newLink]);
      setNewLink('');
    }
  };

  const removeLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    onLinksChange(updatedLinks);
  };

  return (
    <div className={`input-multiple-links ${className}`}>
      <div className="links-list">
        {links.map((link, index) => (
          <div key={index} className="link-item">
            <span>{link}</span>
            <button onClick={() => removeLink(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="link-input">
        <input
          type="url"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          placeholder={placeholder}
        />
        <button onClick={addLink}>Add</button>
      </div>
    </div>
  );
};

export { InputMultipleLinks };
