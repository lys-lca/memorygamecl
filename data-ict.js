/* -------------------------------------------------------
   DATA-ICT.JS — ICT Subject Data
   Built from LCA ICT exam papers 2002–2021
   Categories mirror the recurring exam topic areas.
------------------------------------------------------- */

var dataICT = [

    /* ══════════════════════════════════════════════
       ACRONYMS & UNITS — isAcronym: true
       All eligible for the match game
    ══════════════════════════════════════════════ */

    {
        acronym:   "CPU",
        full:      "Central Processing Unit",
        hint:      "The brain of the computer.",
        answer:    "The CPU is the main chip that processes all instructions in a computer. It carries out the fetch-decode-execute cycle, handling calculations and logic for the operating system and all software.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "RAM",
        full:      "Random Access Memory",
        hint:      "Temporary memory — lost when power goes off.",
        answer:    "RAM is the short-term memory of a computer. It temporarily holds data and programs the CPU is actively using. The more RAM a computer has, the more programs it can run at once. Data in RAM is lost when the computer is turned off.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "ROM",
        full:      "Read-Only Memory",
        hint:      "Permanent memory that keeps data when power is off.",
        answer:    "ROM is non-volatile memory that permanently stores data. It cannot normally be written to by the user. It holds the computer's startup instructions (BIOS/firmware) which run when you switch the computer on.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "VDU",
        full:      "Visual Display Unit",
        hint:      "Another name for a computer monitor or screen.",
        answer:    "A VDU is an output device that displays information from the computer on screen. It is also called a monitor or screen. Modern VDUs are flat panel LCD or LED displays.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "USB",
        full:      "Universal Serial Bus",
        hint:      "The most common port and connector type on computers.",
        answer:    "USB is a standard connection interface used to connect devices such as mice, keyboards, memory sticks and phones to a computer. It allows fast data transfer and can also supply power to devices. Modern versions include USB-C.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "PC",
        full:      "Personal Computer",
        hint:      "A general-purpose desktop or laptop computer.",
        answer:    "A PC is a general-purpose computer designed for individual use. It can run a wide variety of software for work, education and entertainment. Examples include desktop computers and laptops running Windows or macOS.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "WWW",
        full:      "World Wide Web",
        hint:      "The system of web pages accessed via the internet.",
        answer:    "The World Wide Web is a system of interlinked web pages and resources accessed over the internet using a browser. It was invented by Tim Berners-Lee in 1989. The web is one service that runs on the internet — not the same as the internet itself.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "HTTP",
        full:      "Hypertext Transfer Protocol",
        hint:      "The rules for sending web pages between servers and browsers.",
        answer:    "HTTP is the protocol (set of rules) used to transfer web pages between a server and a browser. When you type a web address, your browser uses HTTP to request and receive the page. HTTPS is the secure encrypted version.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "HTML",
        full:      "Hypertext Markup Language",
        hint:      "The code used to build web pages.",
        answer:    "HTML is the standard language used to create web pages. It uses tags to define the structure and content of a page, including headings, paragraphs, images and links. All web pages are built using HTML.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "LAN",
        full:      "Local Area Network",
        hint:      "A network within one building.",
        answer:    "A LAN connects computers and devices within a small geographic area such as one building, school or office. Devices on a LAN can share files, printers and an internet connection. Example: a school computer lab network.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "WAN",
        full:      "Wide Area Network",
        hint:      "A network that spans cities or countries.",
        answer:    "A WAN connects networks over large geographic areas such as between cities or countries. The internet is the largest WAN in the world. Businesses use WANs to connect offices in different locations.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "WLAN",
        full:      "Wireless Local Area Network",
        hint:      "A LAN that uses Wi-Fi instead of cables.",
        answer:    "A WLAN is a local area network that uses wireless signals (Wi-Fi) instead of cables to connect devices. It allows laptops, phones and tablets to connect to the network without being physically plugged in.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "DVD",
        full:      "Digital Versatile Disc",
        hint:      "An optical disc that holds more data than a CD.",
        answer:    "A DVD is an optical storage disc that can store much more data than a CD — typically 4.7 GB. DVDs are used to store films, software and data. A DVD drive uses a laser to read data from the disc.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "CD-ROM",
        full:      "Compact Disc Read-Only Memory",
        hint:      "An optical disc you can read but not write to.",
        answer:    "A CD-ROM is an optical storage disc that can only be read, not written to. It holds up to 700 MB of data and was commonly used to distribute software. The drive uses a laser to read the data.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "CD-RW",
        full:      "Compact Disc ReWritable",
        hint:      "An optical disc you can write, erase and reuse.",
        answer:    "A CD-RW is a rewritable optical disc. Unlike a CD-R which can only be written to once, a CD-RW can be written to, erased and written again multiple times. Useful for regularly updated backups.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "HDD",
        full:      "Hard Disk Drive",
        hint:      "The main internal storage in a computer.",
        answer:    "A HDD is the main permanent storage device inside a computer. It uses spinning magnetic platters to store data. HDDs can store large amounts of data (measured in GB or TB) but are slower than SSDs due to their moving parts.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "OCR",
        full:      "Optical Character Recognition",
        hint:      "Software that reads printed text and converts it to digital text.",
        answer:    "OCR is technology that recognises printed or handwritten characters from a scanned image and converts them into editable digital text. Used with scanners to digitise printed documents without needing to retype them.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "OS",
        full:      "Operating System",
        hint:      "The software that manages all hardware and other software.",
        answer:    "An operating system is system software that manages computer hardware and software resources. It provides the user interface and allows applications to run. Examples include Windows, macOS, Android and Linux.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "ATM",
        full:      "Automated Teller Machine",
        hint:      "A machine that lets you withdraw cash from your bank.",
        answer:    "An ATM is an electronic machine that allows bank customers to withdraw cash, check balances and carry out other transactions without going into a bank. It reads data from the chip or magnetic strip on a bank card.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "PPM",
        full:      "Pages Per Minute",
        hint:      "A measure of how fast a printer can print.",
        answer:    "PPM measures printer speed — how many pages it can print in one minute. A typical inkjet printer prints 10–20 ppm. Laser printers are generally faster. Always check ppm when comparing printers for high-volume use.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "DPI",
        full:      "Dots Per Inch",
        hint:      "A measure of print or scan quality/resolution.",
        answer:    "DPI measures the resolution of a printer or scanner — how many individual dots fit into one inch. Higher DPI means sharper, more detailed output. A typical printer is 300–600 dpi; photo printers can be 1200 dpi or more.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "GHz",
        full:      "Gigahertz",
        hint:      "The unit used to measure processor speed.",
        answer:    "GHz is the unit of measurement for processor speed. One GHz equals one billion clock cycles per second. A faster GHz generally means the processor can handle more instructions per second. Modern CPUs typically run at 2–5 GHz.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "MHz",
        full:      "Megahertz",
        hint:      "One million clock cycles per second.",
        answer:    "MHz measures frequency at one million cycles per second. It was the standard unit for early processor speeds. Modern processors are measured in GHz (1 GHz = 1000 MHz). MHz is still used for RAM speed and wireless frequencies.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "MB",
        full:      "Megabyte",
        hint:      "Roughly one million bytes of storage.",
        answer:    "A megabyte is a unit of digital storage equal to approximately one million bytes (1,024 kilobytes). RAM is often measured in MB (e.g. 512 MB). Larger storage is measured in GB or TB.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "GB",
        full:      "Gigabyte",
        hint:      "Roughly one billion bytes — common measure of storage.",
        answer:    "A gigabyte is a unit of digital storage equal to approximately one billion bytes (1,024 megabytes). Hard drives and USB sticks are commonly measured in GB. A typical film is 1–4 GB in size.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "TB",
        full:      "Terabyte",
        hint:      "One thousand gigabytes — used for large hard drives.",
        answer:    "A terabyte is a unit of digital storage equal to approximately one trillion bytes (1,024 gigabytes). Modern hard drives and cloud storage are often measured in TB. One TB can hold hundreds of thousands of photos.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "KB",
        full:      "Kilobyte",
        hint:      "Roughly one thousand bytes — the smallest common unit.",
        answer:    "A kilobyte is a unit of digital storage equal to 1,024 bytes. Small text files are measured in KB. The order of units from smallest to largest is: bit → byte → KB → MB → GB → TB.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },
    {
        acronym:   "WYSIWYG",
        full:      "What You See Is What You Get",
        hint:      "The screen display matches the printed output exactly.",
        answer:    "WYSIWYG describes software where the display on screen matches exactly what will be printed or published. Word processors and desktop publishers are WYSIWYG — you see the formatting, fonts and layout as you type.",
        category:  "Acronyms & Units",
        subject:   "ICT",
        isAcronym: true,
        image:     ""
    },

    /* ══════════════════════════════════════════════
       HARDWARE
    ══════════════════════════════════════════════ */

    {
        acronym:   "Input device",
        full:      "Sends data into the computer",
        hint:      "You use it to give the computer information.",
        answer:    "An input device sends data or instructions into the computer. Examples include: keyboard, mouse, scanner, microphone, webcam, barcode reader, touch screen and digital camera.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Output device",
        full:      "Receives and presents data from the computer",
        hint:      "You use it to see or hear results from the computer.",
        answer:    "An output device receives processed data from the computer and presents it to the user. Examples include: monitor (VDU), printer, speakers, projector and headphones.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Storage device",
        full:      "Saves data permanently for later use",
        hint:      "Used to keep files even when the computer is off.",
        answer:    "A storage device saves data permanently so it can be retrieved later. Examples include: hard disk drive (HDD), USB memory stick, DVD, CD, SD card and external hard drive. Storage capacity is measured in GB or TB.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Peripheral device",
        full:      "Any external device connected to the computer",
        hint:      "It connects to the computer but is not inside the main unit.",
        answer:    "A peripheral is any device connected to a computer that expands its functionality. Peripherals can be input (keyboard, mouse), output (printer, monitor) or storage (external hard drive, USB stick). They connect via USB, Bluetooth or Wi-Fi.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Laser printer",
        full:      "Uses toner powder and heat to print",
        hint:      "Fast, high quality — uses a toner cartridge not ink.",
        answer:    "A laser printer uses a laser beam to create an image on a drum coated with toner (powder). Heat fuses the toner to the paper. Laser printers are fast, produce sharp text and are cost-effective for printing large volumes.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Inkjet printer",
        full:      "Sprays tiny droplets of ink onto paper",
        hint:      "Uses liquid ink cartridges — good for photos.",
        answer:    "An inkjet printer works by spraying tiny droplets of liquid ink onto paper through small nozzles. It produces good quality colour output and is suitable for photos. Inkjet printers are cheaper to buy than laser printers but ink cartridges are expensive.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Dot matrix printer",
        full:      "Strikes a ribbon to form characters from dots",
        hint:      "An impact printer — it physically strikes the paper.",
        answer:    "A dot matrix printer uses a print head with pins that strike an inked ribbon against paper to form characters from a pattern of dots. It is noisy and slow but can print on multi-part carbon copy forms. Once common in shops and banks.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Barcode scanner",
        full:      "Reads barcodes using a laser beam",
        hint:      "Used at supermarket checkouts to read product codes.",
        answer:    "A barcode scanner uses a laser to read the pattern of black and white lines in a barcode. The code is matched to a database to retrieve product information such as name and price. Widely used in retail, libraries and stock control.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Hardware",
        full:      "The physical components of a computer you can touch",
        hint:      "If you can physically touch it, it is hardware.",
        answer:    "Hardware refers to all the physical components of a computer system. Examples include the CPU, monitor, keyboard, mouse, printer and hard drive. Hardware is contrasted with software — the programs that run on it.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Laptop computer",
        full:      "A portable personal computer with a built-in screen",
        hint:      "A portable alternative to a desktop PC.",
        answer:    "A laptop is a portable personal computer with a built-in screen, keyboard and battery. Advantages over a desktop include: portability, built-in battery for use without power, and takes up less space. The battery means it can be used on the go.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Multimedia computer",
        full:      "A computer that can handle audio, video and images",
        hint:      "Can play sound, video and display images.",
        answer:    "A multimedia computer is one capable of processing different types of media including text, audio, images and video. Key features include a sound card, speakers, a graphics card, a microphone input and a DVD/Blu-ray drive.",
        category:  "Hardware",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },

    /* ══════════════════════════════════════════════
       SOFTWARE
    ══════════════════════════════════════════════ */

    {
        acronym:   "Software",
        full:      "Programs and instructions that run on hardware",
        hint:      "You cannot touch it — it is the programs on a computer.",
        answer:    "Software is the set of instructions (programs) that tell hardware what to do. There are two main types: system software (e.g. operating systems) which manage the computer, and application software (e.g. Word, Excel, games) which perform specific tasks.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Operating system",
        full:      "System software that manages the whole computer",
        hint:      "Windows, macOS and Android are examples.",
        answer:    "An operating system (OS) is system software that manages all computer hardware and allows other software to run. It provides the user interface and handles tasks like file management and memory allocation. Examples: Windows, macOS, Android, Linux.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Word processor",
        full:      "Software for creating and editing text documents",
        hint:      "Used for letters, reports and CVs.",
        answer:    "A word processor is application software used to create, edit, format and print text documents. Features include spell check, mail merge and text formatting tools. Examples include Microsoft Word and Google Docs. Best suited to: writing a CV, a letter or a report.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Spreadsheet",
        full:      "Software for organising and calculating numbers",
        hint:      "Used by accountants to calculate wages and budgets.",
        answer:    "A spreadsheet is application software used to organise, calculate and analyse numerical data in a grid of rows and columns. It uses formulas for automatic calculations and can create charts. Examples: Microsoft Excel and Google Sheets.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Database software",
        full:      "Software for storing and searching large amounts of data",
        hint:      "A librarian would use this to manage a catalogue.",
        answer:    "A database is application software used to store, organise and retrieve large amounts of structured data in tables. Records can be searched, sorted and filtered quickly. Examples include Microsoft Access. Used by libraries, hospitals and businesses.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Desktop publishing",
        full:      "Software for creating professional page layouts",
        hint:      "Used to design newsletters, posters and magazines.",
        answer:    "Desktop publishing (DTP) software is used to create professional page layouts combining text and images. Used to produce newsletters, posters, brochures and magazines. Examples include Microsoft Publisher and Adobe InDesign.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Computer virus",
        full:      "Malicious software that damages or disrupts a computer",
        hint:      "It can spread from one computer to another.",
        answer:    "A computer virus is malicious software that attaches itself to files or programs. It can damage data, slow down the computer or steal information. Viruses spread through email attachments, infected downloads and USB drives. Antivirus software detects and removes them.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Software copyright",
        full:      "Legal protection that prevents unauthorised copying of software",
        hint:      "You cannot copy or share software without permission.",
        answer:    "Software copyright is the legal protection given to software creators. It means you cannot copy, share or sell software without the owner's permission. Using software without a valid licence is illegal and can result in prosecution.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Antivirus software",
        full:      "Software that detects and removes malicious programs",
        hint:      "Protects your computer from viruses and malware.",
        answer:    "Antivirus software scans a computer for known viruses, malware and other threats, and removes or quarantines them. It should be kept up to date so it can detect the latest threats. Examples include Norton, McAfee and Windows Defender.",
        category:  "Software",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },

    /* ══════════════════════════════════════════════
       NETWORKING & INTERNET
    ══════════════════════════════════════════════ */

    {
        acronym:   "Network",
        full:      "Two or more computers connected to share resources",
        hint:      "Computers linked together to share files and printers.",
        answer:    "A computer network is two or more computers connected together to share resources such as files, printers and an internet connection. Networks can be wired (cables) or wireless (Wi-Fi). They improve communication and reduce costs for businesses.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Stand-alone computer",
        full:      "A single computer not connected to a network",
        hint:      "It works on its own without sharing resources.",
        answer:    "A stand-alone computer is not connected to any network. It operates independently and cannot share files or devices directly with other computers. It is simpler to set up but less flexible than a networked system.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Internet",
        full:      "A global network of millions of connected computers",
        hint:      "The worldwide system connecting all networks.",
        answer:    "The internet is a global network connecting millions of computers and devices worldwide. It carries email, web pages, video streaming and file transfers. To connect you need a device, a modem/router and an account with an ISP (Internet Service Provider).",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Intranet",
        full:      "A private internal network for one organisation",
        hint:      "Like the internet but only accessible inside one organisation.",
        answer:    "An intranet is a private network used within one organisation such as a school or company. It uses the same technology as the internet but is only accessible to authorised users. Used for sharing internal documents, notices and resources.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Browser",
        full:      "Software used to access and view web pages",
        hint:      "Chrome and Firefox are examples.",
        answer:    "A web browser is application software used to access and display web pages on the internet. It communicates with web servers using HTTP/HTTPS. Examples include Google Chrome, Mozilla Firefox, Microsoft Edge and Safari.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Modem",
        full:      "Device that connects a computer to the internet",
        hint:      "Needed to connect to the internet via a phone line.",
        answer:    "A modem converts digital computer signals into signals that can be sent over a telephone line (and vice versa). It is needed to connect to the internet via a phone line. Modern home routers usually include a built-in modem.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Wi-Fi",
        full:      "Wireless networking technology for internet access",
        hint:      "Connects devices to the internet without cables.",
        answer:    "Wi-Fi is wireless networking technology that allows devices to connect to a network and the internet without physical cables. It uses radio waves to transmit data. Wi-Fi is commonly used in homes, schools, offices and public hotspots.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Bluetooth",
        full:      "Short-range wireless technology for connecting devices",
        hint:      "Used to connect phones to speakers or earphones wirelessly.",
        answer:    "Bluetooth is a short-range wireless technology (typically up to 10 metres) used to connect devices without cables. Common uses include wireless headphones, keyboards, mice and transferring files between nearby phones.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Email",
        full:      "Electronic messages sent and received over the internet",
        hint:      "The 'e' stands for electronic.",
        answer:    "Email (electronic mail) is a method of sending and receiving messages electronically over the internet. Emails can include attachments such as documents and photos. Advantages: fast, cheap, can reach multiple recipients at once. You need an email address and an app such as Gmail or Outlook.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Teleworking",
        full:      "Working from home using ICT to connect to the office",
        hint:      "Working remotely using the internet and a computer.",
        answer:    "Teleworking (or remote working) means using ICT — internet, email and video calls — to work from home or another location instead of commuting to an office. Advantages include saving travel time, reduced office costs and greater flexibility.",
        category:  "Networking & Internet",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },

    /* ══════════════════════════════════════════════
       DATA & FILE MANAGEMENT
    ══════════════════════════════════════════════ */

    {
        acronym:   "Backup",
        full:      "A copy of data stored separately in case originals are lost",
        hint:      "A second copy kept safe in case something goes wrong.",
        answer:    "A backup is a copy of data stored separately from the original in case the original is lost, corrupted or accidentally deleted. Best practice: store backups offsite (e.g. on cloud storage or an external drive kept elsewhere) to protect against fire or theft.",
        category:  "Data & File Management",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Formatting a disk",
        full:      "Preparing a storage device so data can be stored on it",
        hint:      "Sets up the file system — erases all existing data.",
        answer:    "Formatting a disk prepares it for use by creating a file system that the operating system can use to store and retrieve data. Formatting erases all existing data on the disk. It must be done before a new disk or USB drive can be used.",
        category:  "Data & File Management",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Copying a file",
        full:      "Creates a duplicate — original stays in place",
        hint:      "You end up with two versions of the file.",
        answer:    "Copying a file creates a duplicate in a new location while leaving the original file in its original location. After copying, the same file exists in two places. Use Ctrl+C (copy) and Ctrl+V (paste) to copy files.",
        category:  "Data & File Management",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Moving a file",
        full:      "Transfers the file — original is removed from source",
        hint:      "The file ends up in one place only.",
        answer:    "Moving a file transfers it from one location to another. The original is removed from its source and placed in the new location — only one copy exists afterwards. Use Ctrl+X (cut) and Ctrl+V (paste) to move files.",
        category:  "Data & File Management",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Housekeeping",
        full:      "Routine maintenance tasks to keep a computer organised",
        hint:      "Tidying up files and freeing up space on your computer.",
        answer:    "Computer housekeeping refers to routine maintenance tasks that keep the computer running efficiently and organised. Examples include: deleting unnecessary files, emptying the recycle bin, organising folders, running disk cleanup and defragmenting the hard drive.",
        category:  "Data & File Management",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "File",
        full:      "A named collection of data stored on a computer",
        hint:      "A document, image or program saved with a name and extension.",
        answer:    "A file is a named collection of related data stored on a computer. Files can be documents, images, videos, programs or any type of data. Every file has a name and an extension (e.g. .docx, .jpg, .mp3) that identifies its type.",
        category:  "Data & File Management",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Folder",
        full:      "A container used to organise and group files",
        hint:      "Like a physical folder — holds related files together.",
        answer:    "A folder (also called a directory) is a container used to organise files on a computer. Folders can hold files and other folders (sub-folders). Using a clear folder structure makes files easier to find and keeps your storage organised.",
        category:  "Data & File Management",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },

    /* ══════════════════════════════════════════════
       DATA UNITS
    ══════════════════════════════════════════════ */

    {
        acronym:   "Bit",
        full:      "The smallest unit of data — a 0 or a 1",
        hint:      "A single binary digit — either on or off.",
        answer:    "A bit (binary digit) is the smallest unit of data in computing. It can only be 0 or 1. All data in a computer is ultimately stored as a pattern of bits. 8 bits make one byte.",
        category:  "Data Units",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Byte",
        full:      "8 bits — stores one character",
        hint:      "One letter or number takes up one byte.",
        answer:    "A byte consists of 8 bits and is the basic unit used to store a single character (letter, number or symbol). All larger units of storage — KB, MB, GB, TB — are multiples of bytes.",
        category:  "Data Units",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },
    {
        acronym:   "Memory units order",
        full:      "Bit → Byte → KB → MB → GB → TB",
        hint:      "Smallest to largest units of digital storage.",
        answer:    "The order of storage units from smallest to largest: Bit (1 binary digit) → Byte (8 bits) → Kilobyte / KB (1,024 bytes) → Megabyte / MB (1,024 KB) → Gigabyte / GB (1,024 MB) → Terabyte / TB (1,024 GB).",
        category:  "Data Units",
        subject:   "ICT",
        isAcronym: false,
        image:     ""
    },

];
