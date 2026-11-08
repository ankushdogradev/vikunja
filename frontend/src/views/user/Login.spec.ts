import {describe, it, expect, vi} from 'vitest'
import {mount} from '@vue/test-utils'
import Login from '@/views/user/Login.vue'
import {createPinia, setActivePinia} from 'pinia'

vi.mock('vue-router', () => ({
	useRoute: () => ({hash: ''}),
	useRouter: () => ({push: vi.fn()}),
	RouterLink: {template: '<a><slot /></a>'},
}))

vi.mock('vue-i18n', () => ({
	useI18n: () => ({t: (key: string) => key}),
}))

describe('Login.vue submit button', () => {
	it('has submit type on login button', () => {
		setActivePinia(createPinia())
		const wrapper = mount(Login, {
			global: {
				stubs: {
					FormField: true,
					Password: true,
					FormCheckbox: true,
					DesktopLogin: true,
					Message: true,
				},
				directives: {
					focus: {},
				},
			},
		})
		const button = wrapper.findComponent({name: 'XButton'})
		expect(button.attributes('type')).toBe('submit')
	})
})
