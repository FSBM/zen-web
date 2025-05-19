
interface OptionListItem {
    title: string;
    href: string;
}


export default function TopOptions({OptionList}:{OptionList:OptionListItem[]})
{
    
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                {OptionList.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="flex items-center justify-center text-md text-gray-400 hover:text-violet-400 transition duration-200 ease-in-out"
                        style={item.href === '/Explore'  ? { color: 'white' } : {}}
                        
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    )
}