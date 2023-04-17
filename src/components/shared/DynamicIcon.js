import loadable from "@loadable/component"; // remember to npm install me

const DynamicIcon = ({ nameIcon, propsIcon }) => {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLowerCase();
  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el) => el[nameIcon],
  });

  return <ElementIcon {...propsIcon} />;
};

export default DynamicIcon;
