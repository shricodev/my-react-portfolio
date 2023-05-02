type NavbarProps = {
    setActiveNav: (value: string) => void;
};

const Header = ({ setActiveNav }: NavbarProps) => {
    return (
        <header className="py-8">
            <div className="container">
                <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
                    <a className="transition-none" href="#">
                        <p className="text-gradient bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] bg-clip-text font-primary text-[2.1rem] font-bold tracking-wider text-transparent">
                            SHRICODEV
                        </p>
                    </a>
                    <a href="#portfolio">
                        <button
                            className="btn-header h-[48px] rounded-full px-6 text-sm font-medium text-white"
                            onClick={() => {
                                setActiveNav("#portfolio");
                            }}
                        >
                            Work with Me
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
