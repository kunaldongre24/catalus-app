-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 23, 2021 at 08:36 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vscc`
--

-- --------------------------------------------------------

--
-- Table structure for table `chapter`
--

CREATE TABLE `chapter` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chapter`
--

INSERT INTO `chapter` (`id`, `name`, `subject_id`, `created_at`, `updated_at`) VALUES
(30, 'Some Basic Concepts of Chemistry', 1, '2021-12-18 22:47:11', '2021-12-18 22:47:11'),
(31, 'Structure of Atom', 1, '2021-12-18 22:47:23', '2021-12-18 22:47:23'),
(32, 'Classification of Elements and Periodicity in Properties', 1, '2021-12-18 22:47:41', '2021-12-18 22:47:41'),
(33, 'Chemical Bonding and Molecular Structure', 1, '2021-12-18 22:49:28', '2021-12-18 22:49:28'),
(34, 'States of Matter: Gases and Liquids', 1, '2021-12-18 22:49:34', '2021-12-18 22:49:34'),
(35, 'Thermodynamics', 1, '2021-12-18 22:49:39', '2021-12-18 22:49:39'),
(36, 'Equilibrium', 1, '2021-12-18 22:49:45', '2021-12-18 22:49:45'),
(37, 'Redox Reactions', 1, '2021-12-18 22:49:51', '2021-12-18 22:49:51'),
(38, 'Hydrogen', 1, '2021-12-18 22:49:57', '2021-12-18 22:49:57'),
(39, 's-Block Elements', 1, '2021-12-18 22:50:25', '2021-12-18 22:50:25'),
(40, 'Some p-Block Elements', 1, '2021-12-18 22:51:13', '2021-12-18 22:51:13'),
(41, 'Organic Chemistry – Some Basic Principles and Techniques', 1, '2021-12-18 22:51:51', '2021-12-18 22:51:51'),
(42, 'Hydrocarbons', 1, '2021-12-18 22:52:01', '2021-12-18 22:52:01'),
(43, 'Environmental Chemistry', 1, '2021-12-18 22:52:11', '2021-12-18 22:52:11'),
(44, 'Solid State', 1, '2021-12-18 22:52:27', '2021-12-18 22:52:27'),
(45, 'Solutions', 1, '2021-12-18 22:52:31', '2021-12-18 22:52:31'),
(46, 'Electrochemistry', 1, '2021-12-18 22:52:37', '2021-12-18 22:52:37'),
(47, 'Surface Chemistry', 1, '2021-12-18 22:52:54', '2021-12-18 22:52:54'),
(48, 'General Principles and Processes of Isolation of Elements', 1, '2021-12-18 22:53:04', '2021-12-18 22:53:04'),
(49, 'p-Block Elements', 1, '2021-12-18 22:53:12', '2021-12-18 22:53:12'),
(50, 'd and f Block Elements', 1, '2021-12-18 22:53:21', '2021-12-18 22:53:21'),
(51, 'Coordination Compounds', 1, '2021-12-18 22:53:34', '2021-12-18 22:53:34'),
(52, 'Haloalkanes and Haloarenes', 1, '2021-12-18 22:53:48', '2021-12-18 22:53:48'),
(53, 'Alcohols, Phenols and Ethers', 1, '2021-12-18 22:53:54', '2021-12-18 22:53:54'),
(54, 'Aldehydes, Ketones and Carboxylic Acids', 1, '2021-12-18 22:54:02', '2021-12-18 22:54:02'),
(55, 'Organic Compounds Containing Nitrogen', 1, '2021-12-18 22:54:14', '2021-12-18 22:54:14'),
(56, 'Biomolecules', 1, '2021-12-18 22:54:19', '2021-12-18 22:54:19'),
(57, 'Polymers', 1, '2021-12-18 22:54:24', '2021-12-18 22:54:24'),
(58, 'Chemistry in Everyday Life', 1, '2021-12-18 22:54:29', '2021-12-18 22:54:29'),
(59, 'Physical World and Measurement', 2, '2021-12-18 23:13:56', '2021-12-18 23:13:56'),
(60, 'Kinematics', 2, '2021-12-18 23:14:17', '2021-12-18 23:14:17'),
(61, 'Laws of Motion', 2, '2021-12-18 23:14:34', '2021-12-18 23:14:34'),
(62, 'Work, Energy and Power', 2, '2021-12-18 23:14:40', '2021-12-18 23:14:40'),
(63, 'Motion of System of Particles and Rigid Body', 2, '2021-12-18 23:14:45', '2021-12-18 23:14:45'),
(64, 'Gravitation', 2, '2021-12-18 23:14:50', '2021-12-18 23:14:50'),
(65, 'Properties of Bulk Matter', 2, '2021-12-18 23:14:56', '2021-12-18 23:14:56'),
(66, 'Thermodynamics (Physics)', 2, '2021-12-18 23:15:35', '2021-12-18 23:15:35'),
(67, 'Behaviour of Perfect Gas and Kinetic Theory', 2, '2021-12-18 23:15:46', '2021-12-18 23:15:46'),
(68, 'Oscillations and Waves', 2, '2021-12-18 23:15:53', '2021-12-18 23:15:53'),
(69, 'Electrostatics', 2, '2021-12-18 23:16:02', '2021-12-18 23:16:02'),
(70, 'Current Electricity', 2, '2021-12-18 23:16:07', '2021-12-18 23:16:07'),
(71, 'Magnetic Effects of Current and Magnetism', 2, '2021-12-18 23:16:13', '2021-12-18 23:16:13'),
(72, 'Electromagnetic Induction and Alternating Currents', 2, '2021-12-18 23:16:21', '2021-12-18 23:16:21'),
(73, 'Electromagnetic Waves', 2, '2021-12-18 23:16:28', '2021-12-18 23:16:28'),
(74, 'Optics', 2, '2021-12-18 23:16:33', '2021-12-18 23:16:33'),
(75, 'Dual Nature of Matter and Radiation', 2, '2021-12-18 23:16:42', '2021-12-18 23:16:42'),
(76, 'Atoms and Nuclei', 2, '2021-12-18 23:16:55', '2021-12-18 23:16:55'),
(77, 'Electronic Devices', 2, '2021-12-18 23:17:01', '2021-12-18 23:17:01'),
(78, 'Communication Systems', 2, '2021-12-18 23:17:12', '2021-12-18 23:17:12'),
(79, 'Sets', 3, '2021-12-18 23:18:21', '2021-12-18 23:18:21'),
(80, 'Relations and Functions (XI)', 3, '2021-12-18 23:18:27', '2021-12-18 23:18:27'),
(81, 'Trigonometric Functions', 3, '2021-12-18 23:18:34', '2021-12-18 23:18:34'),
(82, ' Principle of Mathematical Induction ', 3, '2021-12-18 23:18:40', '2021-12-18 23:18:40'),
(83, ' Complex Numbers and Quadratic Equations', 3, '2021-12-18 23:18:45', '2021-12-18 23:18:45'),
(84, ' Linear Inequalities', 3, '2021-12-18 23:18:50', '2021-12-18 23:18:50'),
(85, ' Permutations and Combinations', 3, '2021-12-18 23:18:56', '2021-12-18 23:18:56'),
(86, 'Binomial Theorem ', 3, '2021-12-18 23:19:02', '2021-12-18 23:19:02'),
(87, 'Sequence and Series', 3, '2021-12-18 23:19:08', '2021-12-18 23:19:08'),
(88, 'Straight Lines', 3, '2021-12-18 23:19:14', '2021-12-18 23:19:14'),
(89, 'Conic Sections', 3, '2021-12-18 23:19:20', '2021-12-18 23:19:20'),
(90, 'Introduction to Three-dimensional Geometry', 3, '2021-12-18 23:19:30', '2021-12-18 23:19:30'),
(91, 'Limits and Derivatives', 3, '2021-12-18 23:19:36', '2021-12-18 23:19:36'),
(92, ' Statistics', 3, '2021-12-18 23:19:47', '2021-12-18 23:19:47'),
(93, 'Probability (XI)', 3, '2021-12-18 23:19:53', '2021-12-18 23:19:53'),
(94, 'Relations and Functions (XII)', 3, '2021-12-18 23:20:21', '2021-12-18 23:20:21'),
(95, 'Inverse Trigonometric Functions', 3, '2021-12-18 23:21:18', '2021-12-18 23:21:18'),
(96, 'Matrices', 3, '2021-12-18 23:21:26', '2021-12-18 23:21:26'),
(97, 'Determinants', 3, '2021-12-18 23:21:31', '2021-12-18 23:21:31'),
(98, 'Continuity and Differentiability', 3, '2021-12-18 23:22:08', '2021-12-18 23:22:08'),
(99, 'Applications of Derivatives', 3, '2021-12-18 23:22:16', '2021-12-18 23:22:16'),
(100, 'Integrals', 3, '2021-12-18 23:22:21', '2021-12-18 23:22:21'),
(101, 'Applications of the Integrals', 3, '2021-12-18 23:22:28', '2021-12-18 23:22:28'),
(102, 'Differential Equations', 3, '2021-12-18 23:22:37', '2021-12-18 23:22:37'),
(103, 'Vectors', 3, '2021-12-18 23:22:42', '2021-12-18 23:22:42'),
(104, 'Three-dimensional Geometry', 3, '2021-12-18 23:22:48', '2021-12-18 23:22:48'),
(105, 'Linear Programming', 3, '2021-12-18 23:22:54', '2021-12-18 23:22:54'),
(106, 'Probability (XII)', 3, '2021-12-18 23:23:05', '2021-12-18 23:23:05'),
(107, 'Diversity in Living World', 4, '2021-12-18 23:24:01', '2021-12-18 23:24:01'),
(108, 'Structural Organisation in Animals and Plants', 4, '2021-12-18 23:24:07', '2021-12-18 23:24:07'),
(109, 'Cell Structure and Function ', 4, '2021-12-18 23:24:19', '2021-12-18 23:24:19'),
(110, 'Plant Physiology', 4, '2021-12-18 23:24:28', '2021-12-18 23:24:28'),
(111, 'Human Physiology', 4, '2021-12-18 23:24:39', '2021-12-18 23:24:39'),
(112, 'Reproduction', 4, '2021-12-18 23:24:56', '2021-12-18 23:24:56'),
(113, 'Genetics and Evolution', 4, '2021-12-18 23:25:03', '2021-12-18 23:25:03'),
(114, 'Biology and Human Welfare', 4, '2021-12-18 23:25:09', '2021-12-18 23:25:09'),
(115, 'Biotechnology and Its Applications', 4, '2021-12-18 23:25:16', '2021-12-18 23:25:16'),
(116, 'Ecology and environment ', 4, '2021-12-18 23:25:23', '2021-12-18 23:25:23');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `statement` varchar(1024) NOT NULL,
  `subtopic_id` int(11) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `image_url` varchar(256) DEFAULT NULL,
  `correct_option_id` int(11) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `statement`, `subtopic_id`, `chapter_id`, `subject_id`, `image_url`, `correct_option_id`, `updated_at`, `created_at`) VALUES
(6, 'testing', 1, 1, 1, NULL, 1, '2021-12-17 16:43:36', '2021-12-17 16:43:36');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `display_img_url` varchar(256) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `name`, `display_img_url`, `created_at`, `update_at`) VALUES
(1, 'Chemistry', NULL, '2021-12-15 12:23:09', '2021-12-15 12:23:09'),
(2, 'Physics', NULL, '2021-12-15 12:23:21', '2021-12-15 12:23:21'),
(3, 'Maths', NULL, '2021-12-15 12:23:28', '2021-12-15 12:23:28'),
(4, 'Biology', NULL, '2021-12-15 12:23:40', '2021-12-15 12:23:40');

-- --------------------------------------------------------

--
-- Table structure for table `subtopic`
--

CREATE TABLE `subtopic` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `email` varchar(320) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(128) NOT NULL,
  `profile_img_url` varchar(255) DEFAULT NULL,
  `last_updated` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `username`, `password`, `profile_img_url`, `last_updated`, `created_at`) VALUES
(25, 'kunal dongre', 'dongrekunal16@gmail.com', 'kunal', '$2b$10$t5Iq0ezq7oKhcu9vYFp2Y.p9Zr8uxuquHBX5dJRA1G0NcQTiZwrkS', NULL, '2021-11-02 15:49:04', '2021-11-02 15:49:04'),
(26, 'niket deshmukh', 'niket@gmail.com', 'niket', '$2b$10$NjJcJSUUGcNC1XqJ1KbO0.7b5HDIrJPX4DxRyatuG4fHASGwJYjcC', NULL, '2021-11-02 16:15:54', '2021-11-02 16:15:54');

-- --------------------------------------------------------

--
-- Table structure for table `_option`
--

CREATE TABLE `_option` (
  `id` int(11) NOT NULL,
  `value` varchar(128) NOT NULL,
  `question_id` int(11) NOT NULL,
  `image_url` varchar(256) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subtopic`
--
ALTER TABLE `subtopic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`),
  ADD KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chapter`
--
ALTER TABLE `chapter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `subtopic`
--
ALTER TABLE `subtopic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
