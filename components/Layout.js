import NavigationCard from "./NavigationCard";

export default function Layout({children, hideNavigation}) {
    return (
      <div className='flex mt-4 max-w-4xl mx-auto gap-6'>
        {!hideNavigation && (  
          <div className="w-1/4">
            <NavigationCard />
          </div>
        )}
        <div className={hideNavigation ? "w-full" : "w-3/4"}>
          {children}
        </div>
      </div>
    );
  }
  