/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_wk7 extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_n1:fgui.GGraph;
	public static URL:string = "ui://cu1uq9ugnkrtjt";

	public static createInstance():UI_wk7 {
		return <UI_wk7>(fgui.UIPackage.createObject("com", "wk7"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_n1 = <fgui.GGraph>(this.getChild("n1"));
	}
}