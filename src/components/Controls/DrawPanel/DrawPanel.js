import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {Tooltip} from "antd";

const DrawPanel = (props) => {

    // const {
    //     handleProjectTemplate,
    //     handleReverse,
    //     editMode,
    //     pullMode,
    //     handleSwitchPullMode,
    //     handleSwitchEditMode,
    //     handleUndo,
    //     blockPanel,
    //     templateHistoryIsEmpty,
    //     waypointsTemplateGeometry,
    //     handleSave,
    //     handleClean,
    //     tile
    // } = props;

    const {
        handleProjectTemplate,
        handleReverse,
        editMode,
        pullMode,
        handleSwitchPullMode,
        handleSwitchEditMode,
        handleUndo,
        blockPanel,
        handleClean,
        waypointsTemplateGeometry,
        handleSave,
        handleToggleMarkers,
        handleToggleRestrictedRoads,
        visibleOfRestrictedRoads,
        visibleOfEditMarkers,
        handleSimplify,
        tile,
        templateHistoryIsEmpty
    } = props;

    const isDark = tile.includes('dark');
    const color = isDark ? '#fff' : '#000';

    const ProjectionSVG = <svg width="20" height="20" viewBox="0 0 718 709" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
        <path
            d="M304.188 151L275.188 244L247.188 151L154.188 122L247.188 94L275.188 0L304.188 94L397.188 122L304.188 151ZM466.188 100L452.188 147L436.188 100L390.188 85L436.188 71L452.188 25L466.188 71L512.188 85L466.188 100ZM9.18799 611L582.188 55C586.188 50 592.188 47 599.188 47C608.188 46 617.188 49 624.188 56C627.188 58 631.188 62 637.188 67C648.188 77 660.188 89 669.188 101C673.188 107 675.188 112 675.188 117C676.188 127 673.188 136 667.188 142L94.188 700C89.188 705 83.188 707 76.188 708C67.188 709 58.188 706 51.188 699C48.188 696 44.188 693 38.188 687C27.188 678 15.188 666 7.18799 653C3.18799 647 1.18799 641 0.187988 636C-0.812012 626 2.18799 618 9.18799 611ZM469.188 207L511.188 250L644.188 121L602.188 77L469.188 207ZM190.188 264L177.188 310L163.188 264L117.188 249L163.188 235L177.188 188L190.188 235L238.188 249L190.188 264ZM656.188 229L671.188 276L717.188 290L671.188 305L656.188 351L641.188 305L595.188 290L641.188 276L656.188 229Z"
            fill={color}
        />
    </svg>

    const AddToEndSVG = <svg width="20" height="10" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22 4L18 8V5H5.83C5.62439 5.58597 5.24142 6.09339 4.73429 6.45179C4.22715 6.81019 3.621 7.0018 3 7C2.20435 7 1.44129 6.68393 0.87868 6.12132C0.31607 5.55871 0 4.79565 0 4C0 3.20435 0.31607 2.44129 0.87868 1.87868C1.44129 1.31607 2.20435 1 3 1C4.31 1 5.42 1.83 5.83 3H18V0L22 4Z"
            fill={color}
        />
    </svg>

    const AddToBeginSVG = <svg width="20" height="10" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 4L4 8V5H16.17C16.58 6.17 17.69 7 19 7C19.7956 7 20.5587 6.68393 21.1213 6.12132C21.6839 5.55871 22 4.79565 22 4C22 3.20435 21.6839 2.44129 21.1213 1.87868C20.5587 1.31607 19.7956 1 19 1C17.69 1 16.58 1.83 16.17 3H4V0L0 4Z"
            fill={color}
        />
    </svg>

    const UndoSVG = <svg width="20" height="20" viewBox="0 0 1025 1025" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M512.342 1025C433.675 1025 359.675 1008.17 290.342 974.5C221.009 940.833 162.342 894.333 114.342 835L215.342 756C251.342 800 295.175 834.5 346.842 859.5C398.509 884.5 453.675 897 512.342 897C581.675 897 645.842 879.833 704.842 845.5C763.842 811.167 810.509 764.5 844.842 705.5C879.175 646.5 896.342 582.333 896.342 513C896.342 443.667 879.175 379.5 844.842 320.5C810.509 261.5 763.842 214.833 704.842 180.5C645.842 146.167 581.675 129 512.342 129C416.342 129 332.009 161 259.342 225L385.342 351C386.009 374.333 378.342 385.667 362.342 385H32.342C23.6753 385 16.5087 380.333 10.842 371C5.17532 361.667 2.00865 352 1.34199 342L0.341987 24C-0.32468 8.00001 11.0087 0.33334 34.342 1.00001L168.342 135C215.009 93 267.842 60.1667 326.842 36.5C385.842 12.8333 447.675 1.00001 512.342 1.00001C581.675 1.00001 648.009 14.6667 711.342 42C774.675 69.3333 829.175 105.833 874.842 151.5C920.509 197.167 956.842 251.5 983.842 314.5C1010.84 377.5 1024.34 443.667 1024.34 513C1024.34 582.333 1010.84 648.667 983.842 712C956.842 775.333 920.509 829.833 874.842 875.5C829.175 921.167 774.675 957.5 711.342 984.5C648.009 1011.5 581.675 1025 512.342 1025V1025Z"
            fill={color}
        />
    </svg>

    const SaveSVG = <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.9578 3.58281L10.4172 1.04219C10.3 0.925 10.1562 0.839062 10 0.792187V0.75H1.25C0.973437 0.75 0.75 0.973437 0.75 1.25V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V4.28906C13.25 4.02344 13.1453 3.77031 12.9578 3.58281ZM5 1.875H9V3.5H5V1.875ZM12.125 12.125H1.875V1.875H4V4C4 4.27656 4.22344 4.5 4.5 4.5H9.5C9.77656 4.5 10 4.27656 10 4V2.21563L12.125 4.34062V12.125ZM7 5.90625C5.75781 5.90625 4.75 6.91406 4.75 8.15625C4.75 9.39844 5.75781 10.4062 7 10.4062C8.24219 10.4062 9.25 9.39844 9.25 8.15625C9.25 6.91406 8.24219 5.90625 7 5.90625ZM7 9.40625C6.30937 9.40625 5.75 8.84688 5.75 8.15625C5.75 7.46562 6.30937 6.90625 7 6.90625C7.69063 6.90625 8.25 7.46562 8.25 8.15625C8.25 8.84688 7.69063 9.40625 7 9.40625Z"
            fill={color}
        />
    </svg>

    const SwapDirectionsSVG = <svg width="20" height="13" viewBox="0 0 20 15" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 0L12 4H15V11C15 12.1 14.1 13 13 13C11.9 13 11 12.1 11 11V4C11 1.79 9.21 0 7 0C4.79 0 3 1.79 3 4V11H0L4 15L8 11H5V4C5 2.9 5.9 2 7 2C8.1 2 9 2.9 9 4V11C9 13.21 10.79 15 13 15C15.21 15 17 13.21 17 11V4H20L16 0Z"
            fill={color}
        />
    </svg>

    const EraserSVG = <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.09999 13L14.5 5.8C15.1 5.1 15.1 4 14.4 3.3L11.7 0.6C11.4 0.2 10.9 0 10.4 0H8.59999C8.09999 0 7.59999 0.2 7.19999 0.6L0.499989 8.2C-0.100011 8.9 -0.100011 10.1 0.599989 10.7L3.29999 13.4C3.59999 13.8 4.09999 14 4.59999 14H16V13H8.09999V13ZM6.79999 12.9C6.79999 12.9 6.79999 12.8 6.79999 12.9L4.09999 10.2C3.69999 9.8 3.69999 9.3 4.09999 8.9L7.49999 5H6.49999L3.49999 8.3C2.89999 9 2.89999 10 3.59999 10.7L5.89999 13H4.59999C4.39999 13 4.19999 12.9 3.99999 12.8L1.19999 10C0.899989 9.7 0.899989 9.2 1.19999 8.9L4.69999 5H6.49999L9.99999 1H11L7.49999 5L10.6 8.7L7.09999 12.7C6.99999 12.8 6.89999 12.8 6.79999 12.9V12.9Z"
            fill={color}
        />
    </svg>

    const restrictedRoadsOnSVG = <svg width="20" height="20" viewBox="0 0 16 16" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.5189 15.4592L15.5184 15.4597C15.2716 15.8095 14.9223 15.9844 14.4687 15.9844H1.5937C1.18236 15.9844 0.832554 15.8099 0.543576 15.4592C0.275535 15.0879 0.193499 14.697 0.296235 14.2855L4.54608 0.942242L4.54613 0.942095C4.62837 0.674831 4.7928 0.453638 5.04023 0.278375C5.28795 0.102907 5.54526 0.015625 5.81245 0.015625H10.1874C10.4972 0.015625 10.7569 0.0930303 10.9673 0.246985C11.1777 0.400946 11.3401 0.632378 11.4539 0.942578C11.454 0.942678 11.454 0.942779 11.454 0.942879L15.7038 14.286L15.7038 14.286L15.7042 14.2871C15.8686 14.6982 15.8074 15.0882 15.5189 15.4592ZM5.81245 1.32812H5.80101L5.79755 1.33903L1.5788 14.6515L1.57235 14.6719H1.5937H6.6562H6.67182V14.6562V12C6.67182 11.7838 6.72839 11.6246 6.83886 11.5191C6.94946 11.4135 7.11676 11.3594 7.3437 11.3594H8.6562C8.88313 11.3594 9.05043 11.4135 9.16103 11.5191C9.2715 11.6246 9.32807 11.7838 9.32807 12V14.6562V14.6719H9.3437H14.4687H14.4901L14.4836 14.6515L10.2023 1.33897L10.1988 1.32812H10.1874H8.6562H8.64057V1.34375V3.34375C8.64057 3.56009 8.5865 3.71948 8.48108 3.82489C8.37567 3.9303 8.21629 3.98438 7.99995 3.98438C7.7836 3.98438 7.62422 3.9303 7.51881 3.82489C7.4134 3.71948 7.35932 3.56009 7.35932 3.34375V1.34375V1.32812H7.3437H5.81245ZM9.17205 8.53397L9.17212 8.53431C9.21287 8.73802 9.16721 8.9208 9.03469 9.0839C8.90214 9.24704 8.73466 9.32812 8.5312 9.32812H7.4687C7.26518 9.32812 7.09228 9.24698 6.9492 9.08346C6.80601 8.91981 6.73464 8.73636 6.73432 8.53261L7.20261 5.87899C7.26437 5.70452 7.35129 5.57496 7.46262 5.48893C7.57407 5.40281 7.71119 5.35938 7.87495 5.35938H8.06245C8.24756 5.35938 8.39214 5.40307 8.49793 5.48871C8.60363 5.57428 8.67253 5.70328 8.70331 5.87772L9.17205 8.53397Z"
            fill={color} stroke="black" stroke-width="0.03125"/>
    </svg>

    const restrictedRoadsOffSVG = <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.2811 16.4592L16.2806 16.4597C16.0338 16.8095 15.6845 16.9844 15.2309 16.9844H2.3559C1.94457 16.9844 1.59476 16.8099 1.30578 16.4592C1.03774 16.0879 0.955706 15.697 1.05844 15.2855L5.30829 1.94224L5.30834 1.9421C5.39057 1.67483 5.555 1.45364 5.80243 1.27838C6.05015 1.10291 6.30747 1.01562 6.57465 1.01562H10.9497C11.2595 1.01562 11.5191 1.09303 11.7295 1.24698C11.9399 1.40095 12.1023 1.63238 12.2161 1.94258C12.2162 1.94268 12.2162 1.94278 12.2162 1.94288L16.466 15.286L16.466 15.286L16.4664 15.2871C16.6309 15.6982 16.5696 16.0882 16.2811 16.4592ZM6.57465 2.32812H6.56321L6.55976 2.33903L2.34101 15.6515L2.33456 15.6719H2.3559H7.4184H7.43403V15.6562V13C7.43403 12.7838 7.4906 12.6246 7.60107 12.5191C7.71167 12.4135 7.87897 12.3594 8.1059 12.3594H9.4184C9.64534 12.3594 9.81264 12.4135 9.92324 12.5191C10.0337 12.6246 10.0903 12.7838 10.0903 13V15.6562V15.6719H10.1059H15.2309H15.2523L15.2458 15.6515L10.9645 2.33897L10.961 2.32812H10.9497H9.4184H9.40278V2.34375V4.34375C9.40278 4.56009 9.3487 4.71948 9.24329 4.82489C9.13788 4.9303 8.97849 4.98438 8.76215 4.98438C8.54581 4.98438 8.38643 4.9303 8.28101 4.82489C8.1756 4.71948 8.12153 4.56009 8.12153 4.34375V2.34375V2.32812H8.1059H6.57465ZM9.93426 9.53397L9.93433 9.53431C9.97507 9.73802 9.92942 9.9208 9.7969 10.0839C9.66435 10.247 9.49687 10.3281 9.2934 10.3281H8.2309C8.02739 10.3281 7.85449 10.247 7.71141 10.0835C7.56822 9.91981 7.49684 9.73636 7.49653 9.53261L7.96481 6.87899C8.02658 6.70452 8.1135 6.57496 8.22483 6.48893C8.33628 6.40281 8.4734 6.35938 8.63715 6.35938H8.82465C9.00977 6.35938 9.15434 6.40307 9.26013 6.48871C9.36584 6.57428 9.43473 6.70328 9.46552 6.87772L9.93426 9.53397Z"
            fill={color} stroke="black" stroke-width="0.03125"/>
        <path d="M1 1L17 17" stroke={color}/>
        <path d="M17 1L1 17" stroke={color}/>
    </svg>

    const showEditMarkers = <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12C5 12 7.54545 7 12 7C16.4545 7 19 12 19 12C19 12 16.4545 17 12 17C7.54545 17 5 12 5 12Z"
              stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M4 3H5V5H3V4C3 3.45 3.45 3 4 3ZM20 3C20.55 3 21 3.45 21 4V5H19V3H20ZM15 5V3H17V5H15ZM11 5V3H13V5H11ZM7 5V3H9V5H7ZM11 21V19H13V21H11ZM7 21V19H9V21H7ZM4 21C3.45 21 3 20.55 3 20V19H5V21H4ZM3 15H5V17H3V15ZM3 11H5V13H3V11ZM3 7H5V9H3V7ZM21 7V9H19V7H21ZM19.5 13C21.4 13 23 14.6 23 16.5C23 19.1 19.5 23 19.5 23C19.5 23 16 19.1 16 16.5C16 14.6 17.6 13 19.5 13ZM19.5 17.8C20.2 17.8 20.8 17.2 20.7 16.6C20.7 16 20.1 15.4 19.5 15.4C18.9 15.4 18.3 15.9 18.3 16.6C18.3 17.2 18.8 17.8 19.5 17.8Z"
            fill={color}/>
    </svg>

    const hideEditMarkers = <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12C5 12 7.54545 7 12 7C16.4545 7 19 12 19 12C19 12 16.4545 17 12 17C7.54545 17 5 12 5 12Z"
              stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M4 3H5V5H3V4C3 3.45 3.45 3 4 3ZM20 3C20.55 3 21 3.45 21 4V5H19V3H20ZM15 5V3H17V5H15ZM11 5V3H13V5H11ZM7 5V3H9V5H7ZM11 21V19H13V21H11ZM7 21V19H9V21H7ZM4 21C3.45 21 3 20.55 3 20V19H5V21H4ZM3 15H5V17H3V15ZM3 11H5V13H3V11ZM3 7H5V9H3V7ZM21 7V9H19V7H21ZM19.5 13C21.4 13 23 14.6 23 16.5C23 19.1 19.5 23 19.5 23C19.5 23 16 19.1 16 16.5C16 14.6 17.6 13 19.5 13ZM19.5 17.8C20.2 17.8 20.8 17.2 20.7 16.6C20.7 16 20.1 15.4 19.5 15.4C18.9 15.4 18.3 15.9 18.3 16.6C18.3 17.2 18.8 17.8 19.5 17.8Z"
            fill={color}/>
        <path d="M17.5 6.5L6 18" stroke="black"/>
    </svg>

    const simplifySVG = <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.8645 23.3595C12.1433 23.3595 11.4225 23.2882 10.7225 23.1472C10.6572 23.1353 10.5949 23.1104 10.5393 23.0742C10.4837 23.0379 10.4359 22.9909 10.3986 22.936C10.3614 22.881 10.3354 22.8192 10.3223 22.7541C10.3092 22.689 10.3092 22.622 10.3223 22.5569C10.3354 22.4918 10.3613 22.43 10.3985 22.375C10.4358 22.32 10.4836 22.273 10.5392 22.2367C10.5948 22.2004 10.657 22.1756 10.7223 22.1636C10.7876 22.1516 10.8547 22.1528 10.9195 22.167C11.6983 22.3221 12.4928 22.3838 13.2863 22.3507C13.352 22.3474 13.4177 22.3572 13.4797 22.3795C13.5416 22.4019 13.5984 22.4363 13.6469 22.4809C13.6953 22.5255 13.7344 22.5793 13.7618 22.6391C13.7892 22.699 13.8044 22.7637 13.8065 22.8295C13.812 22.962 13.7646 23.0912 13.6749 23.1887C13.5851 23.2863 13.4602 23.3442 13.3278 23.3497C13.174 23.3562 13.0198 23.3595 12.8645 23.3595Z"
            fill={color}/>
        <path
            d="M15.7662 22.946C15.6459 22.946 15.5295 22.9027 15.4385 22.8238C15.3476 22.745 15.2881 22.636 15.271 22.5168C15.254 22.3977 15.2805 22.2763 15.3457 22.1751C15.4109 22.074 15.5104 21.9997 15.626 21.966C16.3877 21.7428 17.1195 21.4276 17.805 21.0275C17.8617 20.9934 17.9247 20.9709 17.9902 20.9613C18.0557 20.9517 18.1225 20.9553 18.1866 20.9717C18.2508 20.9881 18.311 21.0172 18.3639 21.0571C18.4167 21.097 18.4611 21.147 18.4944 21.2042C18.5278 21.2614 18.5495 21.3246 18.5582 21.3902C18.5669 21.4559 18.5625 21.5226 18.5452 21.5865C18.5279 21.6504 18.4981 21.7103 18.4575 21.7626C18.4169 21.8149 18.3664 21.8586 18.3087 21.8912C17.553 22.3323 16.7464 22.6797 15.9067 22.926C15.86 22.9395 15.813 22.946 15.7662 22.946V22.946Z"
            fill={color}/>
        <path
            d="M8.45419 22.3723C8.38244 22.3723 8.30944 22.3568 8.24044 22.3243C7.45022 21.9496 6.70831 21.4805 6.03094 20.9273C5.98009 20.8858 5.93791 20.8347 5.90681 20.7769C5.87571 20.719 5.85631 20.6557 5.8497 20.5904C5.8431 20.525 5.84942 20.4591 5.86832 20.3962C5.88721 20.3333 5.9183 20.2748 5.95982 20.2239C6.00133 20.1731 6.05245 20.1309 6.11027 20.0998C6.16808 20.0687 6.23146 20.0493 6.29677 20.0427C6.36209 20.0361 6.42806 20.0424 6.49093 20.0613C6.5538 20.0802 6.61234 20.1113 6.66319 20.1528C7.27798 20.6549 7.9514 21.0806 8.66869 21.4206C8.77127 21.4692 8.85424 21.5513 8.90394 21.6534C8.95365 21.7555 8.96713 21.8715 8.94216 21.9822C8.9172 22.093 8.85528 22.192 8.76659 22.2629C8.67791 22.3338 8.56773 22.3724 8.45419 22.3723V22.3723Z"
            fill={color}/>
        <path
            d="M20.0436 20.4518C19.944 20.4519 19.8466 20.4222 19.7639 20.3666C19.6813 20.311 19.6172 20.232 19.5798 20.1397C19.5424 20.0473 19.5334 19.9459 19.554 19.8485C19.5747 19.7511 19.624 19.662 19.6956 19.5928C20.2654 19.0404 20.7666 18.4212 21.1881 17.7488C21.2584 17.6363 21.3706 17.5565 21.4999 17.5268C21.6291 17.497 21.7649 17.5199 21.8773 17.5903C21.9897 17.6606 22.0696 17.7728 22.0993 17.9021C22.129 18.0313 22.1062 18.1671 22.0358 18.2795C21.5715 19.0204 21.0194 19.7025 20.3916 20.311C20.2946 20.4048 20.1691 20.4518 20.0436 20.4518V20.4518Z"
            fill="black"/>
        <path
            d="M4.61924 19.2423C4.54171 19.2424 4.46522 19.2244 4.39583 19.1899C4.32644 19.1553 4.26607 19.105 4.21949 19.043C3.69339 18.3442 3.25394 17.5841 2.91074 16.7795C2.885 16.7191 2.87142 16.6542 2.87075 16.5886C2.87009 16.5229 2.88237 16.4578 2.90688 16.3968C2.9314 16.3359 2.96767 16.2804 3.01363 16.2335C3.05959 16.1866 3.11434 16.1493 3.17474 16.1235C3.23515 16.0978 3.30004 16.0842 3.3657 16.0835C3.43136 16.0829 3.4965 16.0951 3.55742 16.1197C3.61833 16.1442 3.67383 16.1804 3.72072 16.2264C3.76762 16.2724 3.805 16.3271 3.83074 16.3875C4.1421 17.1177 4.54084 17.8074 5.01824 18.4415C5.07412 18.5157 5.10822 18.604 5.11671 18.6965C5.12521 18.7891 5.10776 18.8821 5.06633 18.9653C5.0249 19.0484 4.96112 19.1184 4.88215 19.1673C4.80318 19.2162 4.71214 19.2422 4.61924 19.2423Z"
            fill={color}/>
        <path
            d="M22.6705 16.257C22.5915 16.257 22.5136 16.2383 22.4432 16.2024C22.3728 16.1665 22.3119 16.1144 22.2656 16.0504C22.2192 15.9864 22.1887 15.9123 22.1765 15.8342C22.1643 15.7561 22.1708 15.6763 22.1955 15.6012C22.4419 14.847 22.5958 14.0656 22.6538 13.2742C22.6582 13.2086 22.6757 13.1445 22.7051 13.0857C22.7345 13.0269 22.7753 12.9744 22.8251 12.9315C22.8749 12.8885 22.9327 12.8559 22.9952 12.8354C23.0577 12.8149 23.1237 12.807 23.1893 12.8122C23.2548 12.817 23.3187 12.8346 23.3774 12.8641C23.436 12.8936 23.4883 12.9344 23.5313 12.9841C23.5742 13.0338 23.6069 13.0915 23.6275 13.1538C23.6482 13.2162 23.6563 13.282 23.6515 13.3475C23.5874 14.2197 23.4176 15.0809 23.146 15.9122C23.1131 16.0124 23.0494 16.0996 22.964 16.1615C22.8787 16.2234 22.776 16.2568 22.6705 16.257V16.257Z"
            fill={color}/>
        <path
            d="M2.67876 14.6873C2.56 14.6871 2.44518 14.6447 2.35485 14.5676C2.26452 14.4905 2.20458 14.3838 2.18576 14.2665C2.04689 13.4032 2.01264 12.5263 2.08376 11.6548C2.09911 11.5262 2.16368 11.4086 2.26391 11.3267C2.36413 11.2447 2.49221 11.2048 2.62125 11.2153C2.7503 11.2258 2.87025 11.2858 2.95594 11.3829C3.04162 11.4799 3.08636 11.6064 3.08076 11.7358C3.01621 12.5273 3.04727 13.3237 3.17326 14.1078C3.18478 14.1793 3.18061 14.2525 3.16105 14.3223C3.14149 14.392 3.107 14.4567 3.05996 14.5118C3.01293 14.5669 2.95448 14.6112 2.88866 14.6415C2.82283 14.6718 2.75122 14.6874 2.67876 14.6873Z"
            fill={color}/>
        <path
            d="M23.0368 11.32C22.9186 11.3198 22.8043 11.2778 22.7141 11.2014C22.6239 11.1251 22.5637 11.0193 22.544 10.9027C22.4124 10.12 22.1858 9.35633 21.8693 8.62848C21.8164 8.50688 21.8139 8.36924 21.8625 8.24584C21.9111 8.12244 22.0067 8.02339 22.1283 7.97048C22.2499 7.91757 22.3875 7.91513 22.5109 7.9637C22.6343 8.01227 22.7334 8.10788 22.7863 8.22948C23.1352 9.032 23.3851 9.87403 23.5305 10.737C23.5426 10.8087 23.5389 10.8822 23.5196 10.9524C23.5004 11.0225 23.466 11.0876 23.419 11.1431C23.372 11.1986 23.3134 11.2432 23.2474 11.2738C23.1814 11.3043 23.1095 11.3201 23.0368 11.32V11.32Z"
            fill={color}/>
        <path
            d="M3.08356 9.7537C3.00425 9.75365 2.92608 9.73475 2.85552 9.69854C2.78495 9.66234 2.724 9.60988 2.67771 9.54548C2.63141 9.48109 2.60108 9.40661 2.58923 9.32819C2.57738 9.24977 2.58435 9.16965 2.60956 9.09445C2.88854 8.26534 3.26741 7.47326 3.73781 6.7357C3.80912 6.62388 3.92193 6.54497 4.05142 6.51632C4.11554 6.50214 4.18183 6.50072 4.24649 6.51215C4.31116 6.52359 4.37294 6.54764 4.42831 6.58295C4.48368 6.61826 4.53155 6.66413 4.56919 6.71794C4.60683 6.77175 4.63351 6.83245 4.64769 6.89657C4.66188 6.96069 4.66329 7.02697 4.65186 7.09164C4.64043 7.1563 4.61637 7.21808 4.58106 7.27345C4.15433 7.94253 3.81063 8.66106 3.55756 9.4132C3.52409 9.5124 3.46036 9.59861 3.37533 9.65969C3.2903 9.72077 3.18825 9.75365 3.08356 9.7537V9.7537Z"
            fill={color}/>
        <path
            d="M21.0628 6.78003C20.9125 6.78003 20.764 6.71253 20.6653 6.58378C20.1827 5.95313 19.6259 5.38301 19.0068 4.88578C18.9033 4.80273 18.8372 4.68201 18.8228 4.55017C18.8084 4.41833 18.847 4.28618 18.93 4.18278C19.013 4.07937 19.1338 4.0132 19.2656 3.99881C19.3974 3.98441 19.5296 4.02298 19.633 4.10603C20.3146 4.65376 20.9279 5.28152 21.4595 5.97578C21.5163 6.04982 21.5512 6.13827 21.5603 6.23113C21.5695 6.32399 21.5524 6.41755 21.5111 6.50123C21.4699 6.58491 21.406 6.65537 21.3267 6.70464C21.2475 6.75391 21.1561 6.78002 21.0628 6.78003V6.78003Z"
            fill={color}/>
        <path
            d="M5.74325 5.57873C5.64335 5.57875 5.54574 5.54884 5.463 5.49286C5.38026 5.43689 5.31618 5.35741 5.27903 5.26468C5.24188 5.17195 5.23335 5.07021 5.25456 4.97259C5.27576 4.87497 5.32573 4.78594 5.398 4.71698C6.03057 4.11312 6.73384 3.58797 7.4925 3.15298C7.54948 3.12033 7.61233 3.09922 7.67746 3.09086C7.7426 3.0825 7.80874 3.08705 7.87212 3.10425C7.93549 3.12146 7.99486 3.15097 8.04683 3.19112C8.0988 3.23126 8.14235 3.28125 8.175 3.33823C8.20765 3.39521 8.22876 3.45806 8.23712 3.52319C8.24548 3.58833 8.24093 3.65447 8.22373 3.71785C8.20653 3.78122 8.17701 3.84059 8.13686 3.89256C8.09672 3.94453 8.04673 3.98808 7.98975 4.02073C7.30102 4.41563 6.66256 4.89233 6.08825 5.44048C5.99537 5.52931 5.87177 5.57884 5.74325 5.57873Z"
            fill={color}/>
        <path
            d="M17.3475 3.7498C17.2745 3.7498 17.2003 3.7338 17.1303 3.6998C16.4156 3.35453 15.6616 3.09772 14.8848 2.93505C14.7555 2.90732 14.6425 2.82954 14.5704 2.71872C14.4984 2.6079 14.4731 2.47305 14.5002 2.34367C14.5273 2.21429 14.6046 2.1009 14.715 2.02831C14.8255 1.95572 14.9602 1.92983 15.0898 1.9563C15.9461 2.13568 16.7774 2.41886 17.5653 2.79955C17.6672 2.8488 17.7495 2.93121 17.7985 3.03329C17.8476 3.13538 17.8605 3.25109 17.8352 3.36148C17.8099 3.47187 17.7479 3.5704 17.6593 3.64095C17.5707 3.71149 17.4608 3.74987 17.3475 3.7498Z"
            fill={color}/>
        <path
            d="M10.0393 3.11845C9.91862 3.11845 9.80202 3.0748 9.71101 2.99557C9.62 2.91635 9.56071 2.80688 9.54408 2.68736C9.52745 2.56785 9.5546 2.44635 9.62053 2.34528C9.68645 2.24422 9.7867 2.1704 9.90278 2.13745C10.7441 1.89881 11.6113 1.76315 12.4853 1.73345C12.6178 1.72888 12.7468 1.77714 12.8437 1.86763C12.9407 1.95811 12.9977 2.08341 13.0023 2.21595C13.0069 2.34849 12.9586 2.47742 12.8681 2.57438C12.7776 2.67134 12.6523 2.72838 12.5198 2.73295C11.7266 2.75996 10.9396 2.88302 10.176 3.09945C10.1315 3.11196 10.0855 3.11835 10.0393 3.11845V3.11845Z"
            fill={color}/>
        <path
            d="M21.9548 10.2148L15.6975 3.52678C15.5419 3.36015 15.3339 3.25178 15.1081 3.21967C14.8824 3.18756 14.6524 3.23365 14.4565 3.35028L4.144 9.47428C3.9827 9.57005 3.85159 9.70927 3.76565 9.87602C3.67971 10.0428 3.64241 10.2303 3.658 10.4173L4.12075 15.9555C4.13733 16.1539 4.21274 16.3428 4.33731 16.498C4.46188 16.6533 4.62995 16.7679 4.82 16.827L17.0198 20.6245C17.2537 20.6972 17.5061 20.6815 17.7292 20.5805C17.9524 20.4795 18.1307 20.3002 18.2305 20.0765L22.138 11.3048C22.218 11.1252 22.2433 10.926 22.2107 10.7322C22.1781 10.5383 22.0891 10.3583 21.9548 10.2148V10.2148Z"
            fill={color}/>
    </svg>

    return (

        <div>
            {!blockPanel && !waypointsTemplateGeometry &&
            <div className={'drawPanel'}>
                {!visibleOfRestrictedRoads &&
                <Tooltip placement="bottom" title={'Отобразить все дороги'}>
                    <IconButton color="primary" aria-label="Отобразить все дороги" onClick={handleToggleRestrictedRoads}
                    >
                        {restrictedRoadsOnSVG}
                    </IconButton>
                </Tooltip>
                }

                {visibleOfRestrictedRoads &&
                <Tooltip placement="bottom" title={'Скрыть дороги без прав редактирования'}>
                    <IconButton color="primary" aria-label="Скрыть дороги без прав редактирования"
                                onClick={handleToggleRestrictedRoads}
                    >
                        {restrictedRoadsOffSVG}
                    </IconButton>
                </Tooltip>}
            </div>
            }
            {!blockPanel && waypointsTemplateGeometry &&
            <div className={'drawPanel'}>
                <Tooltip placement="bottom" title={'Добавление точки в начало маршрута'}>
                    <IconButton color="primary" aria-label="Добавление в начало" onClick={handleSwitchPullMode}
                                className={pullMode ? 'pullMode' : ''}>
                        {AddToBeginSVG}
                    </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={'Поменять направление движения'}>
                    <IconButton color="primary" aria-label="Поменять направление движения" onClick={handleReverse}>
                        {SwapDirectionsSVG}
                    </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={'Добавление точки в конец маршрута'}>
                    <IconButton color="primary" aria-label="Добавление в конец" onClick={handleSwitchEditMode}
                                className={editMode ? 'editMode' : ''}>
                        {AddToEndSVG}
                    </IconButton>
                </Tooltip>
                {templateHistoryIsEmpty &&
                <Tooltip placement="bottom" title={'Спроецировать на геометрию дорог'}>
                    <IconButton color="primary" aria-label="Проецировать" onClick={handleProjectTemplate}>
                        {ProjectionSVG}
                    </IconButton>
                </Tooltip>
                }

                {!visibleOfEditMarkers &&
                <Tooltip placement="bottom" title={'Отобразить маркеры редактирования'}>
                    <IconButton color="primary" aria-label="Отобразить маркеры редактирования"
                                onClick={handleToggleMarkers}
                    >
                        {showEditMarkers}
                    </IconButton>
                </Tooltip>}
                {visibleOfEditMarkers &&
                <Tooltip placement="bottom" title={'Скрыть маркеры редактирования'}>
                    <IconButton color="primary" aria-label="Скрыть маркеры редактирования" onClick={handleToggleMarkers}
                    >
                        {hideEditMarkers}
                    </IconButton>
                </Tooltip>}

                <Tooltip placement="bottom" title={'Оптимизировать геометрию'}>
                    <IconButton color="primary" aria-label="Облегчить маршрут" onClick={handleSimplify}
                    >
                        {simplifySVG}
                    </IconButton>
                </Tooltip>

                {/*{!templateHistoryIsEmpty ?*/}
                {/*    <Tooltip placement="bottom" title={'Отменить действие'}>*/}
                {/*        <IconButton color="primary" aria-label="Отменить" onClick={handleUndo}>*/}
                {/*            {UndoSVG}*/}
                {/*        </IconButton>*/}
                {/*    </Tooltip>*/}
                {/*    : null}*/}
                <Tooltip placement="bottom" title={'Сохранить изменения'}>
                    <IconButton color="primary" aria-label="Сохранить" onClick={handleSave}>
                        {SaveSVG}
                    </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title={'Стереть геометрию'}>
                    <IconButton color="primary" aria-label="Стереть" onClick={handleClean}>
                        {EraserSVG}
                    </IconButton>
                </Tooltip>
            </div>
            }
            <div className={'drawPanelMessageBox'}>
                {editMode && <p>Включен режим добавления точек в конец маршрута</p>}
                {pullMode && <p>Включен режим добавления точек в начало маршрута</p>}
                {blockPanel && <p>Идет расчет, пожалуйста, подождите</p>}
            </div>
        </div>
    )
};

export default DrawPanel;
