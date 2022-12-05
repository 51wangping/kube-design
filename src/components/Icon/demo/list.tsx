import svgSprites from '../../Icon/spirits';
// import { InputSearch } from "components/Input";
import { DemoIcon } from 'demos';

import React, { useEffect, useState } from 'react';

const IconList = () => {
  const [icons, setIcons] = useState<string[]>([]);
  const [name] = useState('');

  useEffect(() => {
    let arr: any[] = [];
    svgSprites.replace(/id="icon-([\w-]+)"/g, (a, b) => {
      arr.push(b);
      return '$&';
    });
    if (!!name) {
      arr = arr.filter((icon) => icon === name);
    }

    setIcons(arr);
  }, [svgSprites, name]);

  return (
    <div>
      <div style={{ padding: 20 }}>
        {/* <InputSearch
          name="search"
          placeholder="please input a icon name"
          onSearch={(name) => {
            setName(name);
          }}
        /> */}
      </div>
      <DemoIcon icons={icons} />
    </div>
  );
};

export default IconList;
