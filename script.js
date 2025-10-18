
const publications = [
{
    title: "Agile and Cooperative Aerial Manipulation of a Cable-Suspended Load",
    authors: "Sihao Sun, Xuerui Wang, Dario Sanalitro, Antonio Franchi, Marco Tognon, Javier Alonso-Mora",
    link: "https://arxiv.org/abs/2501.18802",
    journal: "Accepted to Nature 2025"
 },
   {
    title: "A Single Subject Machine Learning Based Classification of Motor Imagery EEGs",
    authors: "Dario Sanalitro, Marco Finocchiaro, Pasquale Memmolo, Emanuela Cutuli, Maide Bucolo",
    link: "https://arxiv.org/abs/2508.21724",
    journal: "IEEE Research and Technologies for Society and Industry (RTSI) Conference 2025"
  },
{
    title: "Equilibria, Stability, and Sensitivity for the Aerial Suspended Beam Robotic System Subject to Parameter Uncertainty",
    authors: "Chiara Gabellieri, Marco Tognon, Dario Sanalitro, Antonio Franchi",
    link: "https://ieeexplore.ieee.org/abstract/document/10149811",
    journal: "IEEE Transaction on Robotics, 2023",
},
{
    title: "Force-based Pose Regulation of a Cable-Suspended Load Using UAVs with Force Bias",
    authors: "Chiara Gabellieri, Marco Tognon, Dario Sanalitro, Antonio Franchi",
    link: "https://arxiv.org/pdf/2302.07031.pdf",
    journal: "2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), February 2023"
},
{
  title: "Brain–Computer-Interface-Based Smart-Home Interface by Leveraging Motor Imagery Signals",
  authors: "Simona Cariello, Dario Sanalitro, Alessandro Micali, Arturo Buscarino, Maide Bucolo",
  link: "https://example.com/bci-paper",
  journal: "Inventions, 2023"
},
{
    title: "Precise Cable-Suspended Pick-and-Place with an Aerial Multi-robot System: A Proof of Concept for Novel Robotics-Based Construction Techniques",
    authors: "A. E. Jiménez-Cano, Dario Sanalitro, M. Tognon, A. Franchi, J. Cortés",
    link: "https://link.springer.com/article/10.1007/s10846-022-01668-3",
    journal: "Journal of Intelligent \& Robotic Systems (JIRS), 2022"
},
{
    title: "Indirect Force Control of a Cable-Suspended Aerial Multi-Robot Manipulator",
    authors: "Dario Sanalitro, Marco Tognon, A.E. Jimenez Cano, Juan Cortés, Antonio Franchi",
    link: "https://ieeexplore.ieee.org/document/9779498",
    journal: "IEEE Robotics and Automation Letter (RA-L), 2022"
},
{
    title: "Aerial Cooperative Manipulation: full pose manipulation in air and in interaction with the environment",
    authors: "Dario Sanalitro",
    link: "https://theses.hal.science/tel-03736370/file/2022DarioSANALITRO.pdf",
    journal: "PhD Thesis, 2022"
},
{
    title: "Inertial Estimation and Energy-Efficient Control of a Cable-suspended Load with a Team of UAVs",
    authors: "A. Petitti, D. Sanalitro, M. Tognon, A. Milella, A. Franchi",
    link: "https://ieeexplore.ieee.org/document/9213842",
    journal: "2020 International Conference on Unmanned Aircraft Systems (ICUAS)"
},
{
    title: "Communication-based and Communication-less approaches for Robust Cooperative Planning in Construction with a Team of UAVs",
    authors: "Elena Umili, Marco Tognon, Dario Sanalitro, Giuseppe Oriolo, Antonio Franchi",
    link: "https://ieeexplore.ieee.org/document/9214044",
    journal: "2020 International Conference on Unmanned Aircraft Systems (ICUAS)"
},
{
    title: "Full-Pose Manipulation Control of a Cable-Suspended Load With Multiple UAVs Under Uncertainties",
    authors: "Dario Sanalitro, Heitor J. Savino, Marco Tognon, Juan Cortes, Antonio Franchi",
    link: "https://ieeexplore.ieee.org/document/8972607",
    journal: "IEEE Robotics and Automation Letter (RA-L), 2020"
},
{
    title: "A Study on Force-based Collaboration in Swarms",
    authors: "Chiara Gabellieri, Marco Tognon, Dario Sanalitro, Lucia Pallottino, Antonio Franchi",
    link: "https://link.springer.com/article/10.1007/s11721-019-00178-7",
    journal: "Springer Swarm Intelligence, 2020"
},
{
    title: "Insect-Inspired Body Size Learning Model on a Humanoid Robot",
    authors: "Paolo Arena, Luca Patane, Dario Sanalitro, Alessandra Vitanza",
    link: "https://ieeexplore.ieee.org/document/8487635",
    journal: "2018 7th IEEE International Conference on Biomedical Robotics and Biomechatronics (Biorob)"
},
{
    title: "DPIV analysis of RBCs flows in serpentine micro-channel",
    authors: "F. Cairone, D. Sanalitro, M. Bucolo, D. Ortiz, M. Intaglietta",
    link: "https://ieeexplore.ieee.org/document/8093338",
    journal: "2017 European Conference on Circuit Theory and Design (ECCTD)"
}
];

// Function to create and insert the list items for publications
function insertPublications() {
    const journalList = document.getElementById("journalList");
    const conferenceList = document.getElementById("conferenceList");

    // Clear existing content
    journalList.innerHTML = "";
    conferenceList.innerHTML = "";

    publications.forEach((pub) => {
        const listItem = document.createElement("li");
        const titleLink = document.createElement("a");
        titleLink.href = pub.link;
        titleLink.textContent = pub.title;
        listItem.appendChild(titleLink);
        listItem.innerHTML += `<br><strong>Authors:</strong> ${pub.authors}<br>${pub.journal}`;

        // Check if it’s a conference or journal
        const lowerJournal = pub.journal.toLowerCase();
        if (lowerJournal.includes("conference") || lowerJournal.includes("icuas") || lowerJournal.includes("iros")) {
            conferenceList.appendChild(listItem);
        } else {
            journalList.appendChild(listItem);
        }
    });
}

// Call on page load
window.onload = insertPublications;
