import './App.css'
import AlMNavigationTemplateApp from '../libs/pages/AlMNavigationTemplateApp';
import AlMTemplateApp from '../libs/pages/AlMTemplateApp';

export default function App() {
  const navItems = [
    { icon: "🏠", text: "Home", component: <h1>Sample Home Page</h1> },
    { icon: "🔍", text: "Search", component: <h1>Sample Search Page</h1> },
    { icon: "📄", text: "About", component: <h1>Sample About Page</h1> },
    { icon: "📞", text: "Contact", component: <h1>Sample Contact Page</h1> },
    { icon: "⚙️", text: "Settings", component: <h1>Sample Settings Page</h1> },
  ];
  return (
    <>
      <AlMTemplateApp title={'zen cap'}>
        {/* <div className="container mx-auto p-4">
          <h2 className="text-xl font-bold">Welcome to My Application</h2>
          <p>This is the main content of the application.</p>
        </div> */}
        <AlMNavigationTemplateApp navItems={navItems} />
      </AlMTemplateApp>
    </>
  );
}
