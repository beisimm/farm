/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_wk6 extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_n1:fgui.GGraph;
	public static URL:string = "ui://cu1uq9uglvaaif";

	public static createInstance():UI_wk6 {
		return <UI_wk6>(fgui.UIPackage.createObject("com", "wk6"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_n1 = <fgui.GGraph>(this.getChild("n1"));
	}
}