import { ButtonGroupCallback } from '../utils/buttonGroup';
import toggle from './toggle';
import createBtn, { CollapsableButton } from './createBtn';

import { $m } from 'typings/Module';

export type AddCollapsableButton = (
    mission: ButtonGroupCallback,
    collapsableBtnClass: string
) => void;

export default (
    LSSM: Vue,
    MODULE_ID: string,
    missions: string[],
    allMissionsCollapsed: boolean,
    collapsableMissionBtnClass: string,
    $m: $m
): AddCollapsableButton => {
    const buttons: CollapsableButton[] = [];

    const collapsedClass = LSSM.$store.getters
        .nodeAttribute(`${MODULE_ID}_collapsable-missions_collapsed`)
        .toString();

    LSSM.$store
        .dispatch('addStyles', [
            {
                selectorText: `.${collapsedClass} .panel-heading`,
                style: {
                    display: 'flex',
                },
            },
            {
                selectorText: `.${collapsedClass} .panel-heading > *:not(:last-child)`,
                style: {
                    'margin-right': '5px',
                },
            },
            {
                selectorText: `.${collapsedClass} .panel-heading .mission_progress[id^="mission_bar_outer_"]`,
                style: {
                    width: '100%',
                },
            },
            {
                selectorText: `body.dark .${collapsedClass} .panel-heading .mission_progress[id^="mission_bar_outer_"]`,
                style: {
                    'background-color': 'black',
                },
            },
            {
                selectorText: `.${collapsedClass} .panel-heading .progress-bar[id^="mission_bar_"]`,
                style: {
                    'text-align': 'left',
                },
            },
            {
                selectorText: `.${collapsedClass} .panel-heading .mission_progress[id^="mission_bar_outer_"] a[id^="mission_caption_"]`,
                style: {
                    'margin-left': '5px',
                    'position': 'absolute',
                    'z-index': 10,
                },
            },
            {
                selectorText: `.${collapsedClass} .panel-heading .mission_progress[id^="mission_bar_outer_"] .progress-striped-inner`,
                style: {
                    'background-color': 'rgba(255, 255, 255, 0.5)',
                    'opacity': 0.1,
                },
            },
            {
                selectorText: `.${collapsedClass} .panel-body`,
                style: {
                    display: 'none',
                },
            },
        ])
        .then();

    document
        .getElementById('missions-panel-body')
        ?.addEventListener('click', async e => {
            const btn: HTMLButtonElement | null = (e.target as HTMLElement).closest(
                `.${collapsableMissionBtnClass}`
            );
            const id = btn?.dataset.mission;
            if (!btn || !id) return;

            const button = buttons.find(
                ({ dataset: { mission } }) => mission === id
            );
            const btnGroup = button?.closest<HTMLSpanElement>(
                `.${LSSM.$store.getters.nodeAttribute(
                    `${MODULE_ID}_btn-group_pre-alarm`
                )}`
            );
            if (!button || !btnGroup) return;
            await button.switch?.();

            toggle(btnGroup, btn, id, collapsedClass);
        });

    const allBtn = createBtn(
        LSSM,
        MODULE_ID,
        '-1',
        false,
        collapsableMissionBtnClass,
        collapsedClass,
        $m
    );

    allBtn.classList.add('btn-xs');
    allBtn.addEventListener('click', async () => {
        await allBtn.switch?.();
    });

    if (allMissionsCollapsed) allBtn.click();

    document
        .querySelector<HTMLDivElement>('#btn-group-mission-select')
        ?.append(allBtn);

    return (mission, collapsableMissionBtnClass) => {
        const collapsed = allBtn.classList.contains('btn-danger')
            ? true
            : missions.includes(mission.id.toString());
        const btn = createBtn(
            LSSM,
            MODULE_ID,
            mission.id.toString(),
            collapsed,
            collapsableMissionBtnClass,
            collapsedClass,
            $m
        );
        mission.btnGroup.append(btn);
        buttons.push(btn);
        if (collapsed) {
            toggle(
                mission.btnGroup,
                btn,
                mission.id.toString(),
                collapsedClass
            );
        }
    };
};
