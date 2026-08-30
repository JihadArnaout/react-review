type HeaderParams = {
  text: string;
  text2?: string;
};

function Header({text, text2}: HeaderParams) {
   return (
  <>
   <h1 className="text-4xl font-bold"> {text} </h1>
   <h2 className="text-2xl font-semibold"> {text2} </h2>
   </>
   ); 
  }

export default Header;
