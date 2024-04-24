import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

function AutoSuggestInput({ isOpen, activeInput, handleDivClick }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSuggestionSelect = (value) => {
    setSelectedValue(value);
  };

  const handleInputClick = () => {
    setSelectedValue('');
    handleDivClick(activeInput); // Open the suggestion box
  };

  const suggestions = [
    { name: 'Suggestion 1' },
    { name: 'Suggestion 2' },
    { name: 'Suggestion 3' },
  ];

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : suggestions.filter(
          (suggestion) =>
            suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const inputProps = {
    placeholder: 'Type a name',
    value: selectedValue,
    onChange: (_, { newValue }) => setSelectedValue(newValue),
  };

  return (
    <div>
      {isOpen && (
        <div>
          <Autosuggest
            suggestions={getSuggestions(selectedValue)}
            onSuggestionsFetchRequested={() => {}}
            onSuggestionsClearRequested={() => {}}
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
            inputProps={inputProps}
          />
          <ul>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.name}
                onClick={() => handleSuggestionSelect(suggestion.name)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isOpen && (
        <div onClick={handleInputClick}>
          {selectedValue ? (
            <span>{selectedValue}</span>
          ) : (
            <input type="text" onClick={handleInputClick} />
          )}
        </div>
      )}
    </div>
  );
}

// Usage
function SampleInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const handleDivClick = (inputNumber) => {
    setIsOpen(true);
    setActiveInput(inputNumber);
  };

  return (
    <div>
      <AutoSuggestInput
        isOpen={isOpen && activeInput === 1}
        activeInput={1}
        handleDivClick={handleDivClick}
      />
      <AutoSuggestInput
        isOpen={isOpen && activeInput === 2}
        activeInput={2}
        handleDivClick={handleDivClick}
      />
      {/* Other components */}
    </div>
  );
}

export default SampleInput;
