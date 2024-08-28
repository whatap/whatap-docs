"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[64446],{

/***/ 4707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ overview_contentTitle),
  "default": () => (/* binding */ overview_MDXContent),
  frontMatter: () => (/* binding */ overview_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ overview_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/CustomListItem.js
var CustomListItem = __webpack_require__(48530);
// EXTERNAL MODULE: ./src/components/ChangelogComponent.js
var ChangelogComponent = __webpack_require__(74979);
;// CONCATENATED MODULE: ./i18n/en/crw-data/overview/_changelog_overview.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.3​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent Installation"
          }), ", added the guidance text regarding the roles."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Release of new features"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)("strong", {
            children: "Oracle V2"
          }), " services now launched!!"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)("strong", {
            children: "Oracle Pro"
          }), " services now launched!!"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Release of new features"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Service List"
          }), " menu that provides comprehensive status and information on all services running in the Kubernetes cluster."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node Disk List"
          }), " menu for disk monitoring from the node perspective."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " Added the feature that automatically focuses on the project search bar when you select ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "All projects"
          }), " from the side menu to expand the project list."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " Added the feature to search for agents by IP address through the integrated search in the side menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " Added the CSV file download feature for the search content in the following menu paths."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent CONF."
          }), ", added the feature to download the agent configuration file (", (0,jsx_runtime.jsx)("em", {
            children: "whatap.conf"
          }), ") of the agent selected in the path."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In the table of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Instance Performance Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Thread List/Dump"
          }), ", added the column to display the increased CPU time."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In the summary view of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container summary analysis"
          }), " feature under the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Target information"
          }), " tab."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In the summary view of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the ", (0,jsx_runtime.jsx)("strong", {
            children: "service"
          }), " information under the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Target information"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Resource relations"
          }), " tabs."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Search Log"
          }), " tab (summary or detailed view) of the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), " menu, added the link to go to the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Live Tail"
          }), " menu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container List"
          }), ", added the button to go to the list menu for the following columns."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Workload"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Application List"
          }), ", added the button to go to the list menu for the following columns."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Workload"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Application List"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Image"
          }), " column into the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Resource"
          }), " group."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In the event list table of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Cluster"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Kubernetes Event"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Time the event first occurred"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Number of events"
          }), " columns."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Cluster"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node Detail"
          }), ", added the Pod list."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Record summary"
          }), " tab of the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Trace analysis"
          }), " window, added the feature to display information for ", (0,jsx_runtime.jsx)("strong", {
            children: "Container Id"
          }), " and ", (0,jsx_runtime.jsx)("strong", {
            children: "Pod Name"
          }), " and go to each container and Pod list pages when clicked for each."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " Added the agent status display feature at the top of the screen so that users can immediately recognize when the Kubernetes agent is disabled."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Top SQL Comparison"
          }), " menu to compare the SQL trends in the time zone set based on a specific date and check the fluctuations."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-07-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL / MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Monitoring Multiple Instances"
          }), ", added the ", (0,jsx_runtime.jsx)("em", {
            children: (0,jsx_runtime.jsx)("strong", {
              children: "Uptime"
            })
          }), " widget to check how long it has been since the DB startup."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flex Board / Integrated Flex Board"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the feature to display ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Selected projects"
          }), " in the widget: you can check the list of projects to call data in the widget."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Usage"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Reorganized the UI/UX for payment method registration and modification menus (Profile icon > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Usage"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Payment Information"
          }), ")."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Dashboard"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Application Dashboard"
          }), ", added the default preset modification feature."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Application Dashboard"
          }), ", added the agent search feature."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Transaction Map"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Custom"
          }), " feature that can add items in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TOP 30"
          }), " filter after searching them."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Statistics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Enhanced the features under ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Statistics"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent Installation"
          }), ", added the guide page for ", (0,jsx_runtime.jsx)("strong", {
            children: "Oracle Solaris OS"
          }), " installation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Container Map"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Containter State"
          }), " and description in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Target information"
          }), " tab of the Summary view."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Cluster"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node List"
          }), ", added ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "capacityType"
          }), " as a subcolumn of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node info"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Workload"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pod Status"
          }), " menu to quickly identify Pods in pending status (menu path change from ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Laboratory"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pods"
          }), " to ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Workload"
          }), ")."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Database Parameter"
          }), ", added the feature to compare between the real-time data and the last saved data when ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Reference date"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Comparison date"
          }), " are all set to the date of today."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-26"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Page Load Hitmap"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AJAX Hitmap"
          }), ", and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "User Session Log Search"
          }), " menus, added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Session replay"
          }), " feature to record and replay all events that users perform on the website."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-06-03"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.8​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the URL copying button in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Trace analysis"
          }), " window."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-05-30"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.7​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Performance Trend"
          }), ", added the continuous search prevention feature."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-05-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flex Board / Integrated Flex Board"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to transmit data excluding the project information when using Export Dashboard."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the field selection feature in the count-shape widget."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Apply To All Widgets In The Group"
          }), " function to share options within a group in the secondary chart configuration."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Project selection"
          }), " function into the group widget and added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Projects selected in the Group Widget"
          }), " selection option into the group's sub widget."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the feature to attach the description to the widget."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-05-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Alert"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event Configuration"
          }), " menu of the platform that supports log monitoring, added the log event configuration function."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-05-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Server List"
          }), ", modified to display ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent name"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Host name"
          }), " as separated columns."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Server information"
          }), " section of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Server List"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Server Detail"
          }), ", displayed Agent Name and Host Name as separated items, and added the function to modify them."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-05-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Instance Performance Management"
          }), " menu in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "APP."
          }), " category."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Reorganized the Detail tab in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Laboratory"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pod Status"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-05-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Wait Analysis"
          }), ", added a tooltip to see the full name when you hover your mouse over an item in the table widget."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flex Board / Integrated Flex Board"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("b", {
            children: "Integrated service 2"
          }), " dashboard template."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Manage Accounts"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "User phone"
          }), " section under ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Manage Accounts"
          }), ", added the country code selection feature to general mobile phones."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " From the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Active Transaction Equalizer"
          }), " widget in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Application Dashboard"
          }), ", added the option to display inactive agents."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event Configuration"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log File / Window Event"
          }), " setting."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event History"
          }), ", modified to change the time range of the process chart according to the time setting of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "before and after the alert"
          }), " when the event's detailed information screen appears."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " On the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "View Detailed"
          }), " screen in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Workload"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Deployment List"
          }), ", added the ReplicaSet list in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Resource"
          }), " tab."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Resource relations"
          }), " tab."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Cluster"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Object Manifest"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Kubernetes Event"
          }), " linking feature."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Monitoring a Database Instance"
          }), ", added the button to view the data in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Active sessions"
          }), " table at an interval of 1 minute."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Under the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Age"
          }), " tab in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Top Object"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "per_to_wraparound"
          }), " column."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL / MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Monitoring Multiple Instances"
          }), ", added the detailed pop-up that displays the disk usage trend."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Monitoring Multiple Instances"
          }), ", added the following widgets."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-04-09"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.14​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event Configuration"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), ", displayed the Event tab of the existing Event Settings menu, and added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "JSON Batch Edit"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "JSON Batch Download"
          }), " functions."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to adjust the width of the project list."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-29"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.5​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event Configuration"
          }), ", added the composite metrics event templates as follows:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.2​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent Installation"
          }), ", added the guide for agent installation using the Helm."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Release of new features"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Redis and MongoDB ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), " services now launched!"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Release of new features"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "kube-apiserver Metrics Search"
          }), " menu that can view the kube-apiserver collection metrics."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Deployment List"
          }), " menu that provides information such as ReplicaSet count, container count, key performance data statistics, and Pod count based on the deployment."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Release of new features"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "User Session Log Search"
          }), " menu that can search for user session logs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Alert"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Notifications"
          }), ", added the Opsgenie platform registration function as a 3rd party plug-in."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the features to adjust the agent list spacing, add the search feature, and sort by name in order."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent Active Transaction"
          }), " widget to display active transactions for each agent."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Top 30"
          }), " section of ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Transaction Map"
          }), ", added the features to add, delete, and filter for IP addresses in IP Filter."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added recipient tag setting function in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log File / Window Event"
          }), " tab of the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event configuration"
          }), " menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Reorganized the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "POD initialization performance"
          }), " menu and changed the menu name to ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pod Startup Analysis"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the link to the list menu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the guide for the Pod phase and phases of the selected category."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Workload"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Application List"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Call infomation"
          }), " tab in the application details."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "View Detailed"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "View only selected"
          }), " option that can display only the items selected from the target (container/Pod) list."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Integrated Container Map"
          }), ", added ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "WhatapProject"
          }), " as the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Group by"
          }), " option: grouping by project is possible."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Cluster"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node List"
          }), " for the Kubernetes cluster project, added the node information column."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Workload"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Images"
          }), ", displayed the total number of images."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Show containers created in less than 1 minute"
          }), " option in the Pod category."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["In ", (0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Flex board"
          }), ", added the active session table filter."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the real-time/suspension inquiry and the refresh button to the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Session detail"
          }), " window."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL Statistics"
          }), ", added the selection feature for multiple filters."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL, MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Monitoring Multiple Instances"
          }), ", reorganized the functions."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Default(xos)"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Default(rds)"
          }), " preset."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to save the Y-axis values changed in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL Elapse Map"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Slow Query"
          }), " widgets on the dashboard."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent Installation"
          }), ", improved its design and added the installation guide."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "PG SQL Statistics"
          }), ", added the selection feature for multiple filters."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "MYSQL SQL Statistics"
          }), ", added the selection feature for multiple filters."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MongoDB"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "DB size"
          }), ", reorganized the UI design."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-27"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the user session analyzing feature in the following menu paths:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-03-20"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.9​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Table view"
          }), " on the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Trace analysis"
          }), " window, added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SERIAL"
          }), " field in the modal that is activated by clicking the ", (0,jsx_runtime.jsx)("b", {
            children: "DB Connection"
          }), " and ", (0,jsx_runtime.jsx)("b", {
            children: "SQL"
          }), " steps."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-29"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.4​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " The Beta service of the Go monitoring product is ended and the official service release is now started."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Release of new features"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Reorganized the side menus."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Added the SSO account linking option."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event configuration"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), " function that has strengthened user experience based on the metric field."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Release of new features"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Kubernetes Agent List"
          }), " menu to check the installation status of master and node agents."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "kube-apiserver Dashboard"
          }), " menu to monitor the availability and performance of the cluster by collecting health and performance metrics for kube-apiserver and tracing the response times, throughput, request failures, and such."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flex board / Dashboard"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the group widget copying feature."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Merge multiple projects"
          }), " metric in the Apdex*100 widget on the dashboard."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added a widget button to go to the product's dashboard."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Alert"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " When adding or modifying the metrics events in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event configuration"
          }), ", improved the visibility of the dark theme applied to the product logo for ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Category"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Transaction map"
          }), ", applied a new UI with features reorganized."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Provided the agent installation package and instructions for the AIX operating system."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added a guidance for replacement of the XOS2 metric."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event configuration"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Database"
          }), " tab, the agent restoration notification function (", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Notify when event status is resolved."
          }), ") has been added."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent list"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "DB IP"
          }), " column that displays the IP address of the database server."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to display the session details when a column is clicked in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Lock tree"
          }), " table in the following paths:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Database parameter"
          }), ", added unit notation to some values when displaying the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Value"
          }), " column."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the plan search function in JSON format."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Database size"
          }), ", added the function to check the ", (0,jsx_runtime.jsx)("b", {
            children: "column"
          }), " and ", (0,jsx_runtime.jsx)("b", {
            children: "index"
          }), " lists when the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TABLENAME"
          }), " column is clicked in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Table size (TOP 50)"
          }), " table."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the ReplicationController grouping option."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the network status metrics in the page load hitmap data: ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Valid connection type"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "RTT"
          }), ", and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Valid bandwidth"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Page Load Hitmap"
          }), ", added metrics in the resource data of the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Page load"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Detail"
          }), " window: ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Status code"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Delivery Type"
          }), ","]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the network status metrics for the AJAX hitmap data: ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Valid connection type"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "RTT"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Valid bandwidth"
          }), ", and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Delivery Type"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Network"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the option to identify AWS resources when installing the agent."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Network"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-02-01"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.7​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " The ", (0,jsx_runtime.jsx)("b", {
            children: "Network Performance Monitoring"
          }), " service is released. The ", (0,jsx_runtime.jsx)("b", {
            children: "Network Performance Monitoring (NPM)"
          }), " collects and visualize the network communication data for processes to identify any congestions and failures between networks and uses them to improve the network performance."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event history"
          }), ", added the following features:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "DB V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Lock tree"
          }), ", added the following features:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Resource"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Object Manifest"
          }), ", improved to search and compare the object manifests (supports Kubernetes agent v1.5.0 or later)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-24"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log Trend"
          }), ", you can select values that are not in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Filter"
          }), " list by directly entering them."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "AWS Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-19"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.6​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Install WhaTap Forwarder"
          }), " tab, added Virginia(us-east-1) in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AWS Region"
          }), " list as in Step 2."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Dashboard"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Flex board"
          }), ", added the function to adjust the length of decimal places in auxiliary charts."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "My usage"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to display the usage details when any usage value is clicked in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Invoice Preview History"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the tooltips and related information and multilingual support to each widget in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Application dashboard"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Reorganized the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Transaction map"
          }), " menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL statistics"
          }), ", added the query preview when hovering the mouse over the query."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "#VALUE!"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Agent update"
          }), ", a new UI has been applied and features are reorganized."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL / MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to display the agent update guidance message in the header when the agent has been installed but it does not support the ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PosgreSQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Wait analysis"
          }), ", added the guidance modal for the agent configuration."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Wait analysis"
          }), ", added the function guidance modal."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "PG SQL statistics"
          }), ", added the query preview when hovering the mouse over the query."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to check the configuration for ", (0,jsx_runtime.jsx)("b", {
            children: "column"
          }), " and ", (0,jsx_runtime.jsx)("b", {
            children: "index"
          }), " in the following menu paths:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "MYSQL SQL STATISTICS"
          }), ", added the function to display the preview when hovering the mouse over the query."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Resource"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to filter only the selected resources when the status icon is selected at the top of the screen in the following menus:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the following menus under the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Resource"
          }), " menu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container list"
          }), ", added the function to move to the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node list"
          }), " menu that filters the nodes when the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node"
          }), " column is selected."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Cluster Summary"
          }), ", added the lists for ", (0,jsx_runtime.jsx)("b", {
            children: "Service"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "Ingress"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "Job"
          }), ", and ", (0,jsx_runtime.jsx)("b", {
            children: "CronJob"
          }), " objects."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node list"
          }), ", added the metric, - ", (0,jsx_runtime.jsx)("b", {
            children: "beta.kubernetes.io/instance-type"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Images"
          }), ", added the metrics, - ", (0,jsx_runtime.jsx)("b", {
            children: "Total Container CPU"
          }), " and ", (0,jsx_runtime.jsx)("b", {
            children: "Total Container Memory"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the log data search function in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "WhaTap Event"
          }), ": ", (0,jsx_runtime.jsx)("code", {
            children: "#WhatapEvent"
          }), " category."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Kubernetes Event"
          }), " menu to search Kubernetes events as a project basis."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "etc"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Correlated Project Management"
          }), " menu under ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), ": Registration, view, and deletion of the linked projects."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " If there is any linked project, provided the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Correlation analysis"
          }), " view for the SQL target server and HTTPURLConnection information in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Trace analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Table view"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log search"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Live Tail"
          }), ", reorganized the log search filtering function."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event configuration"
          }), ", enhanced to display the failure reason in a message when the API request has failed while adding or modifying a real-time log event."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to display colors for log labels when the agent options have been set."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024-01-10"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added a filter to search based on the user ID in the following menus:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-12-18"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.10​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Application dashboard"
          }), ", added the option to also save the agent selection when saving the presets."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-12-01"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.4​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Transaction Search"
          }), ", added the guidance message that the filters except ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Transaction ID"
          }), " cannot be applied while the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Multi transaction ID"
          }), " filter is selected."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Applicatoin"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-28"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.3​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Dashboard"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In the table of the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Trace analysis"
          }), " window, added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Error class"
          }), " column."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flex board"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added a UI to change exposure of table columns when an auxiliary table is set to the series type widget."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the chart types that can be selected by the Apdex widget."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Maintenance plan"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Improved the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Management"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Maintenance plan"
          }), " menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Alert"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event history"
          }), ", supported to search the message field other than the title."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "My usage"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Invoice Preview History"
          }), ", added the option to hide the usage and improved the price display function."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Alert"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event configuration"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event reception tag"
          }), " option in the server/process event."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Stat/Report"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL statistics"
          }), ", added the function to display the detailed statistical data for 5 minutes when the bar graph is clicked."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Instance monitoring"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Multiple instance monitoring"
          }), ", added the button to fold the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Active sessions"
          }), " button. Now the graph chart can be viewed in a wider screen."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Enhanced the UI of the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL details"
          }), " screen for user convenience."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the function to view the plan information in json format."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added a new menu, ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Top Object"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Alert"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Event configuration"
          }), ", added the template for the metrics/composite metrics events."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Dashboard"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the function to display the container/Pod blocks disappeared for one minute."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Resource"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Cluster Summary"
          }), " menu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node details"
          }), ", added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "State"
          }), " column in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container"
          }), " table."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "ETC"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pods"
          }), " as the lab menu of the namespace project."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log setting"
          }), ", added the function to export or import ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log primary parser setting"
          }), " and ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log secondary parser setting"
          }), " in JSON format."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log setting"
          }), ", added the function to export or import the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Fast index"
          }), " settings in JSON format."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-22"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Enhanced the UI designs in the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AJAX Hitmap"
          }), " menu and widget, and the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AJAX"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " function."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "URL"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-11-01"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.3​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the URL and UI where ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Collection cycle"
          }), " can be selected during edition."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-10-25"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "User Interface"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " On the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Product catalog"
          }), " page, the design has been reorganized for a better user experience."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the sidebar width adjustment function."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-10-25"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Common"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Instance monitoring"
          }), ", added the button to switch to the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL statistics"
          }), " menu of the corresponding time in non-real-time mode."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-10-25"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Dashboard"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container Map"
          }), ", added the function for users to select application-related fields for the block color display metric."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Cloud"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-10-25"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added a menu: ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Sitemap"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "User Behavior"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-10-25"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " In case of adding the parser in ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log setting"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log primary parser setting"
          }), " tab, added validation for reserved words when entering the search value for ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Log detection condition"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023-10-25"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/en/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Sitemap"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "User Behavior"
          }), " menu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Added the ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Analysis"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AJAX Hitmap"
          }), " menu."]
        }), "\n"]
      }), "\n"]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-blog/overview.mdx


const overview_frontMatter = {
	slug: 'overview',
	title: 'New Feature Timeline',
	authors: 'ysj',
	date: '2024-08-23T15:30',
	toc_max_heading_level: 2,
	tags: [
		'New Feature',
		'New Feature Timeline',
		'Service Overview'
	],
	isTranslationMissing: false
};
const overview_contentTitle = undefined;
const metadata = {
  "permalink": "/en/blog/overview",
  "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/overview.mdx",
  "source": "@site/i18n/en/docusaurus-plugin-content-blog/overview.mdx",
  "title": "New Feature Timeline",
  "description": "New Feature Overview",
  "date": "2024-08-23T15:30:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "New Feature",
      "permalink": "/en/blog/tags/new-feature"
    },
    {
      "inline": true,
      "label": "New Feature Timeline",
      "permalink": "/en/blog/tags/new-feature-timeline"
    },
    {
      "inline": true,
      "label": "Service Overview",
      "permalink": "/en/blog/tags/service-overview"
    }
  ],
  "readingTime": 0.23,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "TW J",
      "email": "ysjo@whatap.io",
      "title": "Technical Writer",
      "imageURL": "./img/teamtwj.svg",
      "key": "ysj",
      "page": null
    }
  ],
  "frontMatter": {
    "slug": "overview",
    "title": "New Feature Timeline",
    "authors": "ysj",
    "date": "2024-08-23T15:30",
    "toc_max_heading_level": 2,
    "tags": [
      "New Feature",
      "New Feature Timeline",
      "Service Overview"
    ],
    "isTranslationMissing": false
  },
  "unlisted": false,
  "nextItem": {
    "title": "2분기 안내",
    "permalink": "/en/blog/2024-2q-summary"
  }
};
const assets = {
"authorsImageUrls": [(__webpack_require__(6881)/* ["default"] */ .A)],
};

/*truncate*/





const overview_toc = [...toc];
function overview_createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "New Feature Overview",
        src: (__webpack_require__(37884)/* ["default"] */ .A) + "",
        width: "934",
        height: "161"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please take a quick look at the overview of new features provided by the Watap service."
    }), "\n", "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("div", {
      class: "history_overview",
      id: "overview_test",
      children: (0,jsx_runtime.jsx)(CustomListItem/* default */.A, {
        children: (0,jsx_runtime.jsx)(ChangelogComponent/* default */.A, {
          children: (0,jsx_runtime.jsx)(MDXContent, {})
        })
      })
    })]
  });
}
function overview_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(overview_createMdxContent, {
      ...props
    })
  }) : overview_createMdxContent(props);
}



/***/ }),

/***/ 6881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/teamtwj-8ca548071cd575b2056335d511c4c2fc.svg");

/***/ }),

/***/ 74979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);

// 일단 오버뷰랑 서비스 버전 디스플레이 가리고 br 없애기 (0718 이거 씀)


const ChangelogComponent = ({ children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // 중복된 changelog-overview, changelog-date, changelog-service 묶음을 체크하기 위한 Set
        const seenCombinations = new Set();
        // 중복된 날짜를 체크하기 위한 Set
        const seenDates = new Set();
        // 모든 changelog-overview 요소 선택
        const overviewElements = document.querySelectorAll('.changelog-overview');
        overviewElements.forEach((overviewEl)=>{
            // changelog-overview 다음에 위치한 changelog-date, changelog-service 요소 선택
            const dateEl = overviewEl.nextElementSibling;
            const serviceEl = dateEl.nextElementSibling;
            if (overviewEl && dateEl && serviceEl) {
                // 각 요소의 텍스트 내용 추출 및 조합
                const overview = overviewEl.textContent.trim();
                const date = dateEl.textContent.trim();
                const service = serviceEl.textContent.trim();
                const combination = `${overview}::${date}::${service}`;
                // 이미 존재하는 조합인 경우 해당 요소들을 숨김 처리
                if (seenCombinations.has(combination)) {
                    overviewEl.style.display = 'none'; // changelog-overview 숨김
                    serviceEl.style.display = 'none'; // changelog-service 숨김
                    overviewEl.classList.add('changelog-overview-dup'); // 중복 표시 클래스 추가
                    serviceEl.classList.add('changelog-service-dup'); // 중복 표시 클래스 추가
                    // changelog-service-dup 다음의 <br> 요소가 있으면 제거
                    const brElement = serviceEl.nextElementSibling;
                    if (brElement && brElement.tagName === 'BR') {
                        brElement.remove();
                    }
                } else {
                    seenCombinations.add(combination); // 새로운 조합 추가
                }
            }
        });
        // 중복된 날짜 체크
        const dateElements = document.querySelectorAll('.changelog-date');
        dateElements.forEach((el)=>{
            const dateText = el.textContent.trim();
            if (seenDates.has(dateText)) {
                el.classList.add('changelog-date-dup'); // 중복 표시 클래스 추가
                el.setAttribute('data-dup', 'true'); // 데이터 속성 설정
            } else {
                seenDates.add(dateText); // 새로운 날짜 추가
            }
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangelogComponent);


/***/ }),

/***/ 48530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


function CustomListItem({ children , overview , date , service  }) {
    const listItemProps = {};
    if (overview) {
        listItemProps['data-overview'] = overview;
    }
    if (date) {
        listItemProps['data-date'] = date;
    }
    if (service) {
        listItemProps['data-service'] = service;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", _objectSpreadProps(_objectSpread({}, listItemProps), {
        children: children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomListItem);


/***/ }),

/***/ 37884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/new_feature_overview_txt-ee61ae3ec473e9be0678e02bdd89b0b9.png");

/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);