import React, { useEffect, useState } from 'react';

export interface PropControlsProps {
  metadata: { [key: string]: any },
  defaults?: { [key: string]: any },
  onChange?: (propName: string, value: any) => void;
}

export const PropControls = ({ metadata, defaults: defaultValue, onChange }: PropControlsProps) => {

  const [props, setProps] = useState([] as { name: string; type: string; value: any }[]);

  useEffect(() => {
    const updatedProps = Object.keys(metadata).map(key => ({
        name: key,
        type: metadata[key].type.name,
        value: defaultValue?.[key as keyof typeof defaultValue] ? defaultValue[key as keyof typeof defaultValue] : metadata[key].defaultValue ? metadata[key].defaultValue.value.replaceAll("'", "") : (metadata[key].type === 'boolean' ? false : undefined)
      }));
      setProps(updatedProps);
  }, [metadata]);

  const handleInputChange = (name: string, value: any) => {
    if (value && value.trim() === "") value = undefined;
    setProps(prevProps =>
      prevProps.map(prop =>
        prop.name === name ? { ...prop, value } : prop
      )
    );
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">Props</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {props.map(prop => (
            <tr key={prop.name}>
              <td className="border p-2">{prop.name}</td>
              <td className="border p-2 whitespace-pre-wrap break-all">{prop.type}</td>
              <td className="border p-2">
                {prop.type === 'boolean' ? (
                  <input
                    type="checkbox"
                    checked={prop.value}
                    onChange={(e) => handleInputChange(prop.name, e.target.checked)}
                  />
                ) : (
                  <input
                    type="text"
                    value={prop.value}
                    onChange={(e) => handleInputChange(prop.name, e.target.value)}
                    className="border p-1 rounded"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

