(Drupal => {
  Drupal.behaviors.accordion = {
    /**
     * Attach accordion behaviour.
     *
     * @param {object} context
     *   DOM object.
     */
    attach(context) {
      const accordions = context.querySelectorAll('.accordion');

      for (let i = 0; i < accordions.length; i++) {
        this.init(accordions[i], i);
      }
    },

    /**
     * Initialise accordion.
     *
     * @param {HTMLElement} accordion
     *   Accordion element.
     * @param {number} index
     *   Accordion element index.
     */
    init: function init(accordion, index) {
      const accordionPanes = accordion.querySelectorAll('.accordion-pane');
      const numberOfPanes = accordionPanes.length;
      const initClass = 'accordion--initialised';
      const openClass = 'accordion-pane__content--open';
      const breakpoint = accordion.dataset.accordionTabsSwitch || null;
      const mq = window.matchMedia(`(max-width: '${breakpoint}')`);
      const panesToClose = [];

      const create = function create() {
        // Only initialise accordion if it hasn't already been done.
        if (accordion.classList.contains(initClass)) {
          return;
        }

        for (let i = 0; i < numberOfPanes; i++) {
          const pane = accordionPanes[i];
          const content = pane.querySelectorAll('.accordion-pane__content');
          const title = pane.querySelectorAll('.accordion-pane__title');
          const titleText = title[0].textContent;
          const button = document.createElement('button');
          const text = document.createTextNode(titleText);
          const id = `accordion-content-${index}-${i}`;

          // Create icons
          const moreIcon = document.createElement('div');
          moreIcon.setAttribute('class', 'accordion-pane__more-icon');
          const lessIcon = document.createElement('div');
          lessIcon.setAttribute('class', 'accordion-pane__less-icon');
          lessIcon.style.display = 'none';

          // Add id attribute to all pane content elements.
          content[0].setAttribute('id', id);

          // Add show/hide button to each accordion title.
          button.appendChild(text);
          button.appendChild(moreIcon);
          button.appendChild(lessIcon);
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-controls', id);

          // Add click event listener to the show/hide button.
          button.addEventListener('click', e => {
            const targetPaneId = e.target.getAttribute('aria-controls');
            const targetPane = accordion.querySelectorAll(`#${targetPaneId}`);

            // Check the current state of the button and the content it controls.
            if (e.target.getAttribute('aria-expanded') === 'false') {
              // Show new pane.
              e.target.setAttribute('aria-expanded', 'true');
              targetPane[0].classList.add(openClass);
              moreIcon.style.display = 'none';
              lessIcon.style.display = 'block';
              panesToClose.push(targetPane[0]);
            } else {
              // If target pane is currently open, close it.
              e.target.setAttribute('aria-expanded', 'false');
              targetPane[0].classList.remove(openClass);
              moreIcon.style.display = 'block';
              lessIcon.style.display = 'none';
            }

            // Add click event listener to the close all button
            const closeAll = document.querySelectorAll('.accordion__close-button');
            const closeButton = closeAll[0];
            closeButton.addEventListener('click', e => {
              for (let j = 0; j < panesToClose.length; j++) {
                panesToClose[j].classList.remove(openClass);
                moreIcon.style.display = 'block';
                lessIcon.style.display = 'none';
                panesToClose[j]
                  .closest('.accordion-pane')
                  .querySelector('button')
                  .setAttribute('aria-expanded', 'false');
              };
            });
          });

          // Add show/hide button to each accordion pane title element.
          title[0].children[0].innerHTML = '';
          title[0].children[0].appendChild(button);
        }

        // Add init class.
        accordion.classList.add(initClass);
      };

      const destroy = () => {
        for (let i = 0; i < numberOfPanes; i++) {
          // Remove buttons from accordion pane titles.
          const button = accordion
            .querySelectorAll('.accordion-pane__title')
            [i].querySelectorAll('button');
          if (button.length > 0) {
            button[0].outerHTML = button[0].innerHTML;
          }

          // Remove id attributes from pane content elements.
          accordionPanes[i]
            .querySelectorAll('.accordion-pane__content')[0]
            .removeAttribute('id');

          // Remove open class from accordion pane's content elements.
          if (
            accordionPanes[i]
              .querySelectorAll('.accordion-pane__content')[0]
              .classList.contains(openClass)
          ) {
            accordionPanes[i]
              .querySelectorAll('.accordion-pane__content')[0]
              .classList.remove(openClass);
          }
        }
        // Remove accordion init class.
        accordion.classList.remove(initClass);
      };

      const breakpointCheck = function breakpointCheck() {
        if (mq.matches || breakpoint === null) {
          create();
        } else {
          destroy();
        }
      };

      // Trigger create/destroy functions at different screen widths
      // based on the value of data-accordion-tabs-switch attribute.
      if (window.matchMedia) {
        mq.addListener(() => {
          breakpointCheck();
        });
        breakpointCheck();
      }
    },
  };
})(Drupal);
