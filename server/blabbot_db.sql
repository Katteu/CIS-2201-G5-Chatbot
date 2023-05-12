-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2023 at 05:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE blabbot_db;
USE blabbot_db;

CREATE TABLE `alumniaff_tb` (
  `_AffID` int(20) NOT NULL,
  `_Question` varchar(255) NOT NULL,
  `_Response` varchar(255) NOT NULL,
  `_faqID` int(9) NOT NULL,
  `_imageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumniaff_tb`
--

INSERT INTO `alumniaff_tb` (`_AffID`, `_Question`, `_Response`, `_faqID`, `_imageURL`) VALUES
(1, 'What graduate studies are offered right now by the department?', 'The department are offering two graduate studies which are Master of Science in Information Technology and Doctor of Philosophy in Information Technology.', 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `distprep_tb`
--

CREATE TABLE `distprep_tb` (
  `_DPID` int(20) NOT NULL,
  `_Question` varchar(255) NOT NULL,
  `_Response` varchar(255) NOT NULL,
  `_faqID` int(9) NOT NULL,
  `_imageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `distprep_tb`
--

INSERT INTO `distprep_tb` (`_DPID`, `_Question`, `_Response`, `_faqID`, `_imageURL`) VALUES
(1, 'Where to find fire extinguishers on campus?', 'There are fire extinguishers in the hallways and near or in classrooms.', 4, NULL),
(2, 'What is the emergency evacuation plan for the fourth floor of Lawrence Bunzel Building?', 'The following image displays the emergency evacuation plan listed with the emergency numbers and key map:', 14, 'https://i.imgur.com/jCeP81c.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `faqs_tb`
--

CREATE TABLE `faqs_tb` (
  `_faqID` int(20) NOT NULL,
  `_category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs_tb`
--

INSERT INTO `faqs_tb` (`_faqID`, `_category`) VALUES
(1, 'Student Concerns'),
(2, 'Student Concerns'),
(3, 'Room Location'),
(4, 'Disaster Preparedness'),
(5, 'Alumni Affairs'),
(6, 'Miscellaneous'),
(7, 'Room Location'),
(8, 'Room Location'),
(9, 'Room Location'),
(10, 'Room Location'),
(11, 'Room Location'),
(12, 'Room Location'),
(13, 'Room Location'),
(14, 'Disaster Preparedness');

-- --------------------------------------------------------

--
-- Table structure for table `livechat_tb`
--

CREATE TABLE `livechat_tb` (
  `request_id` int(11) NOT NULL,
  `stud_id` int(11) NOT NULL,
  `progcoord_id` int(11) NOT NULL,
  `status` enum('pending','accepted','declined') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `livechat_tb`
--

INSERT INTO `livechat_tb` (`request_id`, `stud_id`, `progcoord_id`, `status`, `created_at`) VALUES
(26, 1, 2, 'declined', '2023-05-11 16:18:28');

-- --------------------------------------------------------

--
-- Table structure for table `log_tb`
--

CREATE TABLE `log_tb` (
  `_LogID` int(20) NOT NULL,
  `_userID` int(20) NOT NULL,
  `_assistID` int(11) DEFAULT NULL,
  `_faqID` int(9) DEFAULT NULL,
  `date_time` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `log_tb`
--

INSERT INTO `log_tb` (`_LogID`, `_userID`, `_assistID`, `_faqID`, `date_time`) VALUES
(1, 1, 2, NULL, '2023-05-11 16:16:08');

-- --------------------------------------------------------

--
-- Table structure for table `misc_tb`
--

CREATE TABLE `misc_tb` (
  `_MisceID` int(20) NOT NULL,
  `_Question` varchar(255) NOT NULL,
  `_Response` varchar(255) NOT NULL,
  `_faqID` int(9) NOT NULL,
  `_imageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `misc_tb`
--

INSERT INTO `misc_tb` (`_MisceID`, `_Question`, `_Response`, `_faqID`, `_imageURL`) VALUES
(1, 'What are companies offering internships/jobs?', 'A lot of companies are offering internships or jobs. However, to specifically know, kindly visit the Facebook group named \"Department of Computer, Information Science and Mathematics\" for further information about available internships or jobs.', 6, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roomlocations_tb`
--

CREATE TABLE `roomlocations_tb` (
  `_RLID` int(20) NOT NULL,
  `_Question` varchar(255) NOT NULL,
  `_Response` varchar(255) NOT NULL,
  `_imageURL` varchar(255) NOT NULL,
  `_faqID` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roomlocations_tb`
--

INSERT INTO `roomlocations_tb` (`_RLID`, `_Question`, `_Response`, `_imageURL`, `_faqID`) VALUES
(1, 'Where is LB485?', 'Facing the Lawrence Bunzel building in front of its facade, you go to the rightmost part hallway and find the second to the last room.', 'https://i.imgur.com/iXEFan3.jpg', 3),
(2, 'Where is the Faculty Room (LB465)?', 'When standing in front of the Lawrence Bunzel building, facing its facade, go towards the second hallway on the right side of the fourth floor. Near the comfort rooms, you will spot LB465.', 'https://i.imgur.com/wIGFMRq.jpg', 7),
(3, 'Where are the Department Office and Conference Room located (LB484)?', 'When standing in front of the Lawrence Bunzel building, facing its facade, go towards the second hallway on the right side. Before you reach the faculty room (LB485), there is a door which indicates the Department Office.', 'https://i.imgur.com/wIGFMRq.jpg', 8),
(5, 'Where is LB445?', 'From the front of the Lawrence Bunzel building, facing its facade, head to the second hallway from the left side of the fourth floor.', 'https://i.imgur.com/bt9WyHX.jpg', 9),
(6, 'Where is LB470?', 'From the front of the Lawrence Bunzel building, facing its facade, head to the second hallway from the right side of the fourth floor and proceed to the farthest room.', 'https://i.imgur.com/ht36TyH.jpg', 10),
(7, 'Where is LB452?', 'From the front of the Lawrence Bunzel building, facing its facade, head to the second hallway from the left side of the fourth floor. Go to the rooms near the farthest one as LB452 is near those rooms.', 'https://i.imgur.com/7qHKInZ.jpg', 11),
(8, 'Where is LB482?', 'From the front of the Lawrence Bunzel building, facing its facade, head to the rightmost hallway, and after the next first two rooms, you will find LB482.', 'https://i.imgur.com/887ZAAm.jpg', 12),
(9, 'Where is LB442?', 'Facing the Lawrence Bunzel building in front of its facade, you go to the rightmost part hallway and find the second to the last room.', 'https://i.imgur.com/aEGPByY.jpg', 13);

-- --------------------------------------------------------

--
-- Table structure for table `studcon_tb`
--

CREATE TABLE `studcon_tb` (
  `_SCID` int(20) NOT NULL,
  `_Question` varchar(255) NOT NULL,
  `_Response` varchar(255) NOT NULL,
  `_faqID` int(9) NOT NULL,
  `_imageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studcon_tb`
--

INSERT INTO `studcon_tb` (`_SCID`, `_Question`, `_Response`, `_faqID`, `_imageURL`) VALUES
(1, 'What are the office hours of the department?', 'The department is open from 8:00 AM to 5:00 PM, as those are its designated office hours.', 1, NULL),
(2, 'What are the programs offered by the Department of Computer, Information Science and Mathematics?', 'The department offers Bachelor of Science in Computer Science, Bachelor of Science in Information Technology, and Bachelor of Science in Information Systems.', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_tb`
--

CREATE TABLE `user_tb` (
  `_userID` int(20) NOT NULL,
  `_EmailAdd` varchar(30) NOT NULL,
  `_FirstName` varchar(50) NOT NULL,
  `_LastName` varchar(30) NOT NULL,
  `_userType` int(10) NOT NULL,
  `_Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_tb`
--

INSERT INTO `user_tb` (`_userID`, `_EmailAdd`, `_FirstName`, `_LastName`, `_userType`, `_Password`) VALUES
(1, '19103523@usc.edu.ph', 'Kathea Mari', 'Mayol', 3, '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'),
(2, 'bcmayol@usc.edu.ph', 'Blasminda', 'Mayol', 2, 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'),
(3, '19104001@usc.edu.ph', 'Franz Casimir', 'Ondiano', 3, '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'),
(4, '21100448@usc.edu.ph', 'Tyrone', 'Ybanez', 3, 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f');

--
-- Triggers `user_tb`
--
DELIMITER $$
CREATE TRIGGER `hash_password` BEFORE INSERT ON `user_tb` FOR EACH ROW SET NEW._Password = SHA2(NEW._Password,256)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `hash_update` BEFORE UPDATE ON `user_tb` FOR EACH ROW SET NEW._Password = SHA2(NEW._Password,256)
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumniaff_tb`
--
ALTER TABLE `alumniaff_tb`
  ADD PRIMARY KEY (`_AffID`),
  ADD KEY `_faqID` (`_faqID`);

--
-- Indexes for table `distprep_tb`
--
ALTER TABLE `distprep_tb`
  ADD PRIMARY KEY (`_DPID`),
  ADD KEY `_faqID` (`_faqID`);

--
-- Indexes for table `faqs_tb`
--
ALTER TABLE `faqs_tb`
  ADD PRIMARY KEY (`_faqID`);

--
-- Indexes for table `livechat_tb`
--
ALTER TABLE `livechat_tb`
  ADD PRIMARY KEY (`request_id`),
  ADD KEY `LC_FK` (`stud_id`);

--
-- Indexes for table `log_tb`
--
ALTER TABLE `log_tb`
  ADD PRIMARY KEY (`_LogID`),
  ADD KEY `_userID` (`_userID`),
  ADD KEY `_faqID` (`_faqID`);

--
-- Indexes for table `misc_tb`
--
ALTER TABLE `misc_tb`
  ADD PRIMARY KEY (`_MisceID`),
  ADD KEY `_faqID` (`_faqID`);

--
-- Indexes for table `roomlocations_tb`
--
ALTER TABLE `roomlocations_tb`
  ADD PRIMARY KEY (`_RLID`),
  ADD KEY `_faqID` (`_faqID`);

--
-- Indexes for table `studcon_tb`
--
ALTER TABLE `studcon_tb`
  ADD PRIMARY KEY (`_SCID`),
  ADD KEY `_faqID` (`_faqID`);

--
-- Indexes for table `user_tb`
--
ALTER TABLE `user_tb`
  ADD PRIMARY KEY (`_userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumniaff_tb`
--
ALTER TABLE `alumniaff_tb`
  MODIFY `_AffID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `distprep_tb`
--
ALTER TABLE `distprep_tb`
  MODIFY `_DPID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `faqs_tb`
--
ALTER TABLE `faqs_tb`
  MODIFY `_faqID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `livechat_tb`
--
ALTER TABLE `livechat_tb`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `log_tb`
--
ALTER TABLE `log_tb`
  MODIFY `_LogID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `misc_tb`
--
ALTER TABLE `misc_tb`
  MODIFY `_MisceID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roomlocations_tb`
--
ALTER TABLE `roomlocations_tb`
  MODIFY `_RLID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `studcon_tb`
--
ALTER TABLE `studcon_tb`
  MODIFY `_SCID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_tb`
--
ALTER TABLE `user_tb`
  MODIFY `_userID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumniaff_tb`
--
ALTER TABLE `alumniaff_tb`
  ADD CONSTRAINT `alumniaff_tb_ibfk_1` FOREIGN KEY (`_faqID`) REFERENCES `faqs_tb` (`_faqID`);

--
-- Constraints for table `distprep_tb`
--
ALTER TABLE `distprep_tb`
  ADD CONSTRAINT `distprep_tb_ibfk_1` FOREIGN KEY (`_faqID`) REFERENCES `faqs_tb` (`_faqID`);

--
-- Constraints for table `livechat_tb`
--
ALTER TABLE `livechat_tb`
  ADD CONSTRAINT `LC_FK` FOREIGN KEY (`stud_id`) REFERENCES `user_tb` (`_userID`);

--
-- Constraints for table `log_tb`
--
ALTER TABLE `log_tb`
  ADD CONSTRAINT `log_tb_ibfk_1` FOREIGN KEY (`_userID`) REFERENCES `user_tb` (`_userID`),
  ADD CONSTRAINT `log_tb_ibfk_2` FOREIGN KEY (`_faqID`) REFERENCES `faqs_tb` (`_faqID`);

--
-- Constraints for table `misc_tb`
--
ALTER TABLE `misc_tb`
  ADD CONSTRAINT `misc_tb_ibfk_1` FOREIGN KEY (`_faqID`) REFERENCES `faqs_tb` (`_faqID`);

--
-- Constraints for table `roomlocations_tb`
--
ALTER TABLE `roomlocations_tb`
  ADD CONSTRAINT `roomlocations_tb_ibfk_1` FOREIGN KEY (`_faqID`) REFERENCES `faqs_tb` (`_faqID`);

--
-- Constraints for table `studcon_tb`
--
ALTER TABLE `studcon_tb`
  ADD CONSTRAINT `studcon_tb_ibfk_1` FOREIGN KEY (`_faqID`) REFERENCES `faqs_tb` (`_faqID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
