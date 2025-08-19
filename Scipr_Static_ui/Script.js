// Login button (FULL PAGE REDIRECT to EditorOfficeHome2.html)
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      window.location.href = "EditorOfficeHome2.html";
    });
  }

  // Attach content-only load handlers after initial DOM load
  attachContentListeners();
});

// Attach all content load events
function attachContentListeners() {
  const content = document.querySelector(".content");

  // Status Report 1
  const statusLink = content.querySelector(".status-link");
  if (statusLink) {
    statusLink.addEventListener("click", function () {
      loadIntoContent("statusreport.html");
    });
  }

  // Status Report 2
  const decisionLink = content.querySelector(".load-decision-details");
  if (decisionLink) {
    decisionLink.addEventListener("click", function () {
      loadIntoContent("statusreport2.html");
    });
  }

 
// Back to Dashboard (for any statusreport page)
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "backToDashboard") {
    e.preventDefault();

    fetch("EditorOfficeHome2.html")
      .then(res => res.text())
      .then(html => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        const newContent = temp.querySelector(".content");
        if (newContent) {
          const content = document.querySelector(".content");
          content.innerHTML = newContent.innerHTML;
          attachContentListeners(); // Call your reattach function
        }
      })
      .catch(err => console.error("Error loading dashboard:", err));
  }
});
}


// Load HTML into content section
function loadIntoContent(file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      const content = document.querySelector(".content");
      content.innerHTML = html;
      attachContentListeners();
    })
    .catch(err => console.error(`Failed to load ${file}:`, err));
}

// Sidebar Search Icon Load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchIcon")?.addEventListener("click", function (e) {
    e.preventDefault();
    fetch("SearchManuscript.html")
      .then(response => response.text())
      .then(data => {
        document.querySelector(".content").innerHTML = data;
      });
  });
});

// Load Editor Home from anywhere
function loadEditorHome() {
  fetch('EditorOfficeHome2.html')
    .then(res => res.text())
    .then(html => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      const innerContent = tempDiv.querySelector('.content')?.innerHTML;
      if (innerContent) {
        document.querySelector('.content').innerHTML = innerContent;
        attachContentListeners();
      } else {
        console.error('No .content found in EditorOfficeHome2.html');
      }
    })
    .catch(err => console.error('Failed to load editor home:', err));
}

// New Manuscripts Click (statusreport3.html)
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'new-manuscripts') {
    e.preventDefault();
    fetch('statusreport3.html')
      .then(res => res.text())
      .then(html => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const newContent = tempDiv.querySelector('.search-container');
        if (newContent) {
          document.querySelector('.content').innerHTML = '';
          document.querySelector('.content').appendChild(newContent);
        } else {
          console.error('Content not found in statusreport3.html');
        }
      })
      .catch(err => console.error('Error loading manuscript content:', err));
  }
});


// Parked + New Manuscripts Buttons inside pages
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (e) {
    // Parked Manuscripts (statusreport4.html)
    if (e.target && e.target.id === "parkedBtn") {
      fetch("statusreport4.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
        })
        .catch(err => console.error("Error loading Parked Manuscripts UI:", err));
    }

    // New Manuscripts (statusreport3.html)
    if (e.target && e.target.id === "newManuscriptBtn") {
      fetch("statusreport3.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
        })
        .catch(err => console.error("Error loading New Manuscripts UI:", err));
    }

    // Revised Manuscripts (statusreport5.html)
    if (e.target && e.target.id === "revisedManuscriptsBtn") {
      fetch("statusreport5.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Ensure back buttons etc work
        })
        .catch(err => console.error("Error loading Revised Manuscripts UI:", err));
    }

    // ✅ Under Peer Review Manuscripts (statusreport6.html)
    if (e.target && e.target.id === "underPeerReviewBtn") {
      fetch("statusreport6.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }

      if (e.target && e.target.id === "revokeReviewersBtn") {
      fetch("statusreport7.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
 if (e.target && e.target.id === "ReviewersBtnn") {
      fetch("statusreport8.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
 if (e.target && e.target.id === "ManuscriptsUnderReview") {
      fetch("statusreport9.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
     if (e.target && e.target.id === "ManuscriptsRevision") {
      fetch("statusreport10.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
     if (e.target && e.target.id === "ManuscriptsMissing") {
      fetch("statusreport11.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }

    if (e.target && e.target.id === "ManuscriptDeclined") {
      fetch("statusreport12.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
    if (e.target && e.target.id === "ManuscriptWithdrawn") {
      fetch("statusreport13.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
    if (e.target && e.target.id === "ManuscriptAccepted") {
      fetch("statusreport14.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
        if (e.target && e.target.id === "ManuscriptOut") {
      fetch("statusreport15.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
     if (e.target && e.target.id === "ReviewerAccepted") {
      fetch("statusreport17.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
     if (e.target && e.target.id === "ReviewerExtension") {
      fetch("statusreport18.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
    if (e.target && e.target.id === "RegisterUser") {
      fetch("statusreport19.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
       if (e.target && e.target.id === "ManageUser") {
      fetch("statusreport20.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
    if (e.target && e.target.id === "GrantReview") {
      fetch("statusreport21.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
     if (e.target && e.target.id === "PublicationData") {
      fetch("statusreport22.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }
    if (e.target && e.target.id === "EditProfile") {
  fetch("statusreport23.html")
    .then(res => res.text())
    .then(data => {
      const content = document.querySelector(".content");
      content.innerHTML = data;

      // Extract & execute inline scripts
      const scripts = content.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          // If script has src attribute (external JS file)
          newScript.src = oldScript.src;
        } else {
          // Inline JS
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });

      // Optional: if you have any re-binding logic
      if (typeof attachContentListeners === "function") {
        attachContentListeners();
      }
    })
    .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
}

if (e.target && e.target.id === "PublicationData") {
  fetch("statusreport24.html")
    .then(res => res.text())
    .then(data => {
      const content = document.querySelector(".content");
      content.innerHTML = data;

      // Extract & execute inline scripts
      const scripts = content.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          // If script has src attribute (external JS file)
          newScript.src = oldScript.src;
        } else {
          // Inline JS
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });

      // Optional: if you have any re-binding logic
      if (typeof attachContentListeners === "function") {
        attachContentListeners();
      }
    })
    .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
}

if (e.target && e.target.id === "Mail") {
  fetch("statusreport25.html")
    .then(res => res.text())
    .then(data => {
      const content = document.querySelector(".content");
      content.innerHTML = data;

      // Extract & execute inline scripts
      const scripts = content.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          // If script has src attribute (external JS file)
          newScript.src = oldScript.src;
        } else {
          // Inline JS
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });

      // Optional: if you have any re-binding logic
      if (typeof attachContentListeners === "function") {
        attachContentListeners();
      }
    })
    .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
}
 if (e.target && e.target.id === "PurgeManuscripts") {
      fetch("statusreport26.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    } if (e.target && e.target.id === "ReactivateManuscripts") {
      fetch("statusreport27.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    } if (e.target && e.target.id === "PermanentlyManuscripts") {
      fetch("statusreport28.html")
        .then(res => res.text())
        .then(data => {
          document.querySelector(".content").innerHTML = data;
          attachContentListeners(); // Optional: if needed
        })
        .catch(err => console.error("Error loading Peer Review Manuscripts UI:", err));
    }

  });
});


//back from status5 to editorcontent
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (e) {
    if (e.target && e.target.id === "backFromRevised") {
      fetch("EditorOfficeHome2.html")
        .then(res => res.text())
        .then(html => {
          const temp = document.createElement("div");
          temp.innerHTML = html;

          const newContent = temp.querySelector(".content");
          if (newContent) {
            document.querySelector(".content").innerHTML = newContent.innerHTML;

            // Re-attach listeners after replacing content
            attachContentListeners();
          } else {
            console.error("Editor homepage content not found.");
          }
        })
        .catch(err => {
          console.error("Failed to load Editor Home page:", err);
        });
    }
  });
});
