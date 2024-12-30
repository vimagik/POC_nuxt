import { it, expect, describe, vi } from 'vitest'
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { mount } from '@vue/test-utils'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import AppHeader from '~/components/AppHeader.vue'

installQuasarPlugin();

describe('Tests for appheader', () => {
    
    it('can mount header', async () => {
        const component = await mountSuspended(AppHeader)
        expect(component).exist
    })

    it('Menu have home button', async () => {
        const component = await renderSuspended(AppHeader)
        expect(component.getByTestId('home')).toBeDefined()
    })

    it('Menu have results button', async () => {
        const component = await renderSuspended(AppHeader)
        expect(component.getByTestId('results')).toBeDefined()
    })

    it('Menu have design button', async () => {
        const component = await renderSuspended(AppHeader)
        expect(component.getByTestId('design')).toBeDefined()
    })

 })


