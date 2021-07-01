import React from 'react';
import { mount } from '../../enzyme';

import OpportunitiesComponent from '../OpportunitiesComponent';

describe('Base Component Suit', () => {
    const mountComponent = (props) =>
        mount(<OpportunitiesComponent />)
    
    describe('Basic mounting', () => {
        it('should mount component', () => {
            const wrapper = mountComponent();

            expect(wrapper.find('.post_job_title').exists()).toBe(true);
        })
        it('job position field', () => {
            const wrapper = mountComponent();

            expect(wrapper.find('#job-position').exists()).toBe(true);
        });
        it('search button', () => {
            const wrapper = mountComponent();

            expect(wrapper.find('.search-button').exists()).toBe(true);
        });
    })
})
