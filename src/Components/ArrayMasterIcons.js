import { Icon, InlineIcon } from "@iconify/react";
import userOutlined from "@iconify-icons/ant-design/user-outlined";
import usersFourLight from "@iconify-icons/ph/users-four-light";
import reportAnalytics from "@iconify-icons/tabler/report-analytics";
import passwordIcon from "@iconify-icons/carbon/password";
import bxReset from "@iconify-icons/bx/bx-reset";

import roundSubject from '@iconify-icons/ic/round-subject';
import testcafeIcon from '@iconify-icons/file-icons/testcafe';
import board16Filled from '@iconify-icons/fluent/board-16-filled';
import courseIcon from '@iconify-icons/carbon/course';
import realEstate24Regular from '@iconify-icons/fluent/real-estate-24-regular';
import outlineCategory from '@iconify-icons/ic/outline-category';
import iExamMultipleChoiceOutline from '@iconify-icons/healthicons/i-exam-multiple-choice-outline';
import dataClass from '@iconify-icons/carbon/data-class';

const ArrayMasterIcons = [
    {
      id: 1,
      title: "Subject Master",
      classNani: "subjectmastericon",
      icons: <Icon icon={roundSubject} style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
  
      path:"/subjectmaster"
      
    },
    {
      id: 2,
      title: "Test Master",
      classNani: "testmastericon",
      icons: <Icon icon={testcafeIcon} style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
  
      path:"/testmaster"
      
    },
    {
      id: 3,
      title: "Board Master",
      classNani: "boardmastericon",
      icons: <Icon icon={board16Filled} style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
  
      path:"/boardmaster"
    },
    {
      id: 4,
      title: "Course Master",
      classNani: "courseicon",
      icons: <Icon icon={courseIcon} style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
  
      path:"/coursemaster"
    },
    {
      id: 5,
      title: "State Master",
      classNani: "statemastericon",
      icons: <Icon icon={realEstate24Regular} style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
      path:"/statemaster"
    }
    ,
    {
      id: 6,
      title: "Standard Master",
      classNani: "standardmastericon",
      icons: <Icon icon={outlineCategory} style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
      path:"/standardmaster"
    }
    ,
    {
      id: 7,
      title: "Exam Master",
      classNani: "exammastericon",
      icons: <Icon icon={iExamMultipleChoiceOutline}  style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
      path:"/exammaster"
  
    }
    ,
    {
      id: 8,
      title: "Class Group Mast.",
      classNani: "classgroupmastericon",
      icons: <Icon icon={dataClass} style={{ height: "30px", width: "30px" , padding: "4px 0",}} />,
      path:"/classgroupmaster"
  
    }
  ];
  export default ArrayMasterIcons;