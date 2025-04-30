import {
    AlertCircleIcon,
    AlertHexagonIcon,
    AlignBoxBottomLeftIcon,
    ApertureIcon,
    AppsIcon,
    AppWindowIcon,
    BasketIcon,
    BorderAllIcon,
    BorderHorizontalIcon,
    BorderInnerIcon,
    BorderStyle2Icon,
    BorderTopIcon,
    BorderVerticalIcon,
    BoxAlignBottomIcon,
    BoxAlignLeftIcon,
    BoxIcon,
    BoxModelIcon,
    BrandTidalIcon,
    CalendarIcon,
    CardboardsIcon,
    ChartArcsIcon,
    ChartAreaIcon,
    ChartCandleIcon,
    ChartDonut3Icon,
    ChartDotsIcon,
    ChartLineIcon,
    ChartRadarIcon,
    ColumnsIcon,
    CopyIcon,
    CurrencyDollarIcon,
    EditIcon,
    EyeTableIcon,
    FileCheckIcon,
    FileDotsIcon,
    FilesIcon,
    FileTextIcon,
    FilterIcon,
    HelpIcon,
    JumpRopeIcon,
    LayoutDashboardIcon,
    LayoutKanbanIcon,
    LoginIcon,
    MailIcon,
    Message2Icon,
    MoodHappyIcon,
    PageBreakIcon,
    PhotoAiIcon,
    PointIcon,
    RotateIcon,
    RowInsertBottomIcon,
    SearchIcon,
    ServerIcon,
    SettingsIcon,
    ShoppingCartIcon,
    SocialIcon,
    SortAscendingIcon,
    TableIcon,
    TicketIcon,
    TypographyIcon,
    UserCircleIcon,
    UserPlusIcon,
    UserShieldIcon,
    ZoomCodeIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipBgColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
    external?: boolean;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/',
        external: false
    },
    {
        title: 'Modern',
        icon: ApertureIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/dashboards/modern',
        external: true
    },
    {
        title: 'eCommerce',
        icon: ShoppingCartIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/dashboards/ecommerce',
        external: true
    },
    {
        title: 'Front Pages',
        icon: AppWindowIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '/',
        children: [
            {
                title: 'Homepage',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/front-page/homepage',
                external: true
            },
            {
                title: 'About Us',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/front-page/about-us',
                external: true
            },
            {
                title: 'Blog',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/front-page/blog/posts',
                external: true
            },
            {
                title: 'Blog Details',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/front-page/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                external: true
            },
            {
                title: 'Contact Us',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/front-page/contact-us',
                external: true
            },
            {
                title: 'Portfolio',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/front-page/portfolio',
                external: true
            },
            {
                title: 'Pricing',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/front-page/pricing',
                external: true
            }
        ]
    },

    { header: 'utilities' },
    {
        title: 'Typography',
        icon: TypographyIcon,
        to: '/ui/typography',
        external: false
    },
    {
        title: 'Shadow',
        icon: CopyIcon,
        to: '/ui/shadow',
        external: false
    },

    { header: 'Apps' },
    {
        title: 'Contact',
        icon: BoxIcon,
        to: 'https://modernize-vuejs.adminmart.com/apps/contacts',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },

    {
        title: 'Blog',
        icon: ChartDonut3Icon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '/',
        children: [
            {
                title: 'Posts',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/blog/posts',
                external: true
            },
            {
                title: 'Detail',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                external: true
            }
        ]
    },
    {
        title: 'E-Commerce',
        icon: BasketIcon,
        to: '/ecommerce/',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        children: [
            {
                title: 'Shop',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/ecommerce/products',
                external: true
            },
            {
                title: 'Detail',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/ecommerce/product/detail/1',
                external: true
            },
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/ecommerce/productlist',
                external: true
            },
            {
                title: 'Checkout',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: '/ecommerce/checkout',
                external: true
            },
            {
                title: 'Add Product',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/ecommerce/add-product',
                external: true
            },
            {
                title: 'Edit Product',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/ecommerce/edit-product',
                external: true
            }
        ]
    },
    {
        title: 'User Profile',
        icon: UserCircleIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '/',
        children: [
            {
                title: 'Profile',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/user/profile',
                external: true
            },
            {
                title: 'Followers',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/user/profile/followers',
                external: true
            },
            {
                title: 'Friends',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/user/profile/friends',
                external: true
            },
            {
                title: 'Gallery',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/user/profile/gallery',
                external: true
            }
        ]
    },
    {
        title: 'Invoice',
        icon: FileCheckIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '/',
        children: [
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/invoice',
                external: true
            },
            {
                title: 'Details',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/invoice/details/102',
                external: true
            },
            {
                title: 'Create',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/invoice/create',
                external: true
            },
            {
                title: 'Edit',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/apps/invoice/edit/102',
                external: true
            }
        ]
    },
    {
        title: 'Chats',
        icon: Message2Icon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/apps/chats',
        external: true
    },

    {
        title: 'Notes',
        icon: FilesIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/apps/notes',
        external: true
    },
    {
        title: 'Calendar',
        icon: CalendarIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/apps/calendar',
        external: true
    },
    {
        title: 'Email',
        icon: MailIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/apps/email',
        external: true
    },
    {
        title: 'Tickets',
        icon: TicketIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/apps/tickets',
        external: true
    },
    {
        title: 'Kanban',
        icon: LayoutKanbanIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/apps/kanban',
        external: true
    },

    { header: 'Pages' },
    {
        title: 'Sample Page',
        icon: ApertureIcon,
        to: '/sample-page',
        external: false
    },
    {
        title: 'Pages',
        icon: ChartDonut3Icon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '/',
        children: [
            {
                title: 'Pricing',
                icon: CurrencyDollarIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/pages/pricing',
                external: true
            },
            {
                title: 'Account Setting',
                icon: UserCircleIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/pages/account-settings',
                external: true
            },
            {
                title: 'FAQ',
                icon: HelpIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/pages/faq',
                external: true
            },
            {
                title: 'Gallery Lightbox',
                icon: PhotoAiIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/pages/gallery-lightbox',
                external: true
            },
            {
                title: 'Search Results',
                icon: SearchIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/pages/search-results',
                external: true
            },
            {
                title: 'Social Contacts',
                icon: SocialIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/pages/social-media-contacts',
                external: true
            },
            {
                title: 'Treeview',
                icon: BrandTidalIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/pages/treeview',
                external: true
            }
        ]
    },
    { header: 'Forms' },
    {
        title: 'Form Elements',
        icon: AppsIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '/components/',
        children: [
            {
                title: 'Autocomplete',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/autocomplete',
                external: true
            },
            {
                title: 'Combobox',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/combobox',
                external: true
            },
            {
                title: 'Button',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/button',
                external: true
            },
            {
                title: 'Checkbox',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/checkbox',
                external: true
            },
            {
                title: 'Custom Inputs',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/custominputs',
                external: true
            },
            {
                title: 'File Inputs',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/fileinputs',
                external: true
            },
            {
                title: 'Radio',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/radio',
                external: true
            },
            {
                title: 'Date Time',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/date-time',
                external: true
            },
            {
                title: 'Select',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/select',
                external: true
            },
            {
                title: 'Slider',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/slider',
                external: true
            },
            {
                title: 'Switch',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/switch',
                external: true
            },
            {
                title: 'Time Picker',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/time-picker',
                external: true
            },
            {
                title: 'Stepper',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                to: 'https://modernize-vuejs.adminmart.com/forms/form-elements/stepper',
                external: true
            }
        ]
    },
    {
        title: 'Form Layout',
        icon: FileTextIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/forms/form-layouts',
        external: true
    },
    {
        title: 'Form Horizontal',
        icon: BoxAlignBottomIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/forms/form-horizontal',
        external: true
    },
    {
        title: 'Form Vertical',
        icon: BoxAlignLeftIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/forms/form-vertical',
        external: true
    },
    {
        title: 'Form Custom',
        icon: FileDotsIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/forms/form-custom',
        external: true
    },
    {
        title: 'Form Validation',
        icon: FilesIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/forms/form-validation',
        external: true
    },
    {
        title: 'Editor',
        icon: EditIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: 'https://modernize-vuejs.adminmart.com/forms/editor',
        external: true
    },

    { header: 'Tables' },
    {
        title: 'Basic Table',
        icon: BorderAllIcon,
        to: 'https://modernize-vuejs.adminmart.com/tables/basic',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Dark Table',
        icon: BorderHorizontalIcon,
        to: 'https://modernize-vuejs.adminmart.com/tables/dark',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Density Table',
        icon: BorderInnerIcon,
        to: 'https://modernize-vuejs.adminmart.com/tables/density',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Fixed Header Table',
        icon: BorderTopIcon,
        to: 'https://modernize-vuejs.adminmart.com/tables/fixed-header',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Height Table',
        icon: BorderVerticalIcon,
        to: 'https://modernize-vuejs.adminmart.com/tables/height',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Editable Table',
        icon: BorderStyle2Icon,
        to: 'https://modernize-vuejs.adminmart.com/tables/editable',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    { header: 'Data Tables' },
    {
        title: 'Data Tables',
        icon: AppsIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '/components/',
        children: [
            {
                title: 'Basic Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/basic',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'Header Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/header',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'Selection Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/selection',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'Sorting Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/sorting',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'Pagination Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/pagination',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'Filtering Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/filtering',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'Grouping Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/grouping',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'Table Slots',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/slots',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            },
            {
                title: 'CRUD Table',
                icon: PointIcon,
                to: 'https://modernize-vuejs.adminmart.com/tables/datatables/crudtable',
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true
            }
        ]
    },

    { header: 'UI' },
    {
        title: 'Alert',
        icon: AlertHexagonIcon,
        to: '/ui/alerts'
    },
    {
        title: 'Button',
        icon: AlignBoxBottomLeftIcon,
        to: '/ui/buttons'
    },
    {
        title: 'Cards',
        icon: CardboardsIcon,
        to: '/ui/cards'
    },
    {
        title: 'Tables',
        icon: TableIcon,
        to: '/ui/tables'
    },
    {
        title: 'UI Components',
        icon: BoxIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '#',
        children: [
            {
                title: 'Alert',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/alert'
            },
            {
                title: 'Accordion',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/accordion'
            },
            {
                title: 'Avatar',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/avatar'
            },
            {
                title: 'Chip',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/chip'
            },
            {
                title: 'Dialog',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/dialogs'
            },
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/list'
            },
            {
                title: 'Menus',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/menus'
            },
            {
                title: 'Rating',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/rating'
            },
            {
                title: 'Tabs',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/tabs'
            },
            {
                title: 'Tooltip',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/tooltip'
            },
            {
                title: 'Typography',
                icon: PointIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/ui-components/typography'
            }
        ]
    },

    { header: 'Charts' },
    {
        title: 'Line',
        icon: ChartLineIcon,
        to: 'https://modernize-vuejs.adminmart.com/charts/line-chart',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Gredient',
        icon: ChartArcsIcon,
        to: 'https://modernize-vuejs.adminmart.com/charts/gredient-chart',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Area',
        icon: ChartAreaIcon,
        to: 'https://modernize-vuejs.adminmart.com/charts/area-chart',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Candlestick',
        icon: ChartCandleIcon,
        to: 'https://modernize-vuejs.adminmart.com/charts/candlestick-chart',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Column',
        icon: ChartDotsIcon,
        to: 'https://modernize-vuejs.adminmart.com/charts/column-chart',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Doughnut & Pie',
        icon: ChartDonut3Icon,
        to: 'https://modernize-vuejs.adminmart.com/charts/doughnut-pie-chart',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },
    {
        title: 'Radialbar & Radar',
        icon: ChartRadarIcon,
        to: 'https://modernize-vuejs.adminmart.com/charts/radialbar-chart',
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        external: true
    },

    { header: 'auth' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login',
        external: false
    },
    {
        title: 'Register',
        icon: UserPlusIcon,
        to: '/auth/register',
        external: false
    },
    {
        title: 'Auth Pages',
        icon: UserShieldIcon,
        chip: 'Pro',
        chipColor: 'primary',
        chipBgColor: 'lightprimary',
        to: '#',
        children: [
            {
                title: 'Login',
                icon: LoginIcon,
                to: '#',
                children: [
                    {
                        title: 'Side Login',
                        icon: PointIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/login'
                    },
                    {
                        title: 'Boxed Login',
                        icon: PointIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/login2'
                    }
                ]
            },
            {
                title: 'Register',
                icon: UserPlusIcon,
                to: '#',
                children: [
                    {
                        title: 'Side Register',
                        icon: PointIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/register'
                    },
                    {
                        title: 'Boxed Register',
                        icon: PointIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/register2'
                    }
                ]
            },
            {
                title: 'Forgot Password',
                icon: RotateIcon,
                to: '#',
                children: [
                    {
                        title: 'Side Forgot Password',
                        icon: PointIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/forgot-password'
                    },
                    {
                        title: 'Boxed Forgot Password',
                        icon: PointIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/forgot-password2'
                    }
                ]
            },
            {
                title: 'Two Steps',
                icon: ZoomCodeIcon,
                to: '#',
                children: [
                    {
                        title: 'Side Two Steps',
                        icon: SettingsIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/two-step'
                    },
                    {
                        title: 'Boxed Two Steps',
                        icon: SettingsIcon,
                        chip: 'Pro',
                        chipColor: 'primary',
                        chipBgColor: 'lightprimary',
                        external: true,
                        to: 'https://modernize-vuejs.adminmart.com/auth/two-step2'
                    }
                ]
            },

            {
                title: 'Error',
                icon: AlertCircleIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/auth/404'
            },
            {
                title: 'Maintenance',
                icon: SettingsIcon,
                chip: 'Pro',
                chipColor: 'primary',
                chipBgColor: 'lightprimary',
                external: true,
                to: 'https://modernize-vuejs.adminmart.com/auth/maintenance'
            }
        ]
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: MoodHappyIcon,
        to: '/icons',
        external: false
    }
];

export default sidebarItem;
